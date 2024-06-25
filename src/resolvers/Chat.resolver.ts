import { Chat } from '@entity/Chat.entity'
import { ChatMessage } from '@entity/ChatMessage.entity'
import { ChatMessageList } from '@utils/chat.type'
import { UnauthorizedError } from '@utils/errors'
import { uploadFile } from '@utils/files'
import { ChatMessageData } from '@utils/params'
import { Context, Roles, ServerResponse } from '@utils/types'
import { parse } from 'path'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'

@Resolver(Chat)
export class ChatResolver {
  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => [Chat])
  async chats(
    @Ctx() { auth: { userData } }: Context
  ): Promise<Chat[]> {
    const chats = Chat.createQueryBuilder('chat')
      .leftJoinAndSelect('chat.custom_transaction', 'ct')

    if (!userData.is_admin) {
      chats.where('ct.user = :user', { user: userData.id })
    }

    const chatData = await chats.getMany()

    return chatData
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse)
  async addChatMessage(
    @Ctx() { auth: { userData } }: Context,
    @Arg('data') data: ChatMessageData,
  ): Promise<ServerResponse> {
    
    let path = ''

    const imageData = await data.image
    if (imageData) {
      const { ext } = parse(imageData.filename)
      path = `img_${data.chat_id}_${Date.now().toString()}${ext}`
  
      await uploadFile(imageData, `chat/${data.chat_id}`, path)
    }

    const chatMessage = ChatMessage.create({
      message: data.message,
      image: imageData ? path : undefined,
      user: userData,
      chat: await Chat.findOneByOrFail({ id: data.chat_id }),
    })

    await chatMessage.save()

    return {
      success: true,
      message: 'Message sent successfully',
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => [ChatMessageList])
  async chatMessages(
    @Arg('chat_id') chat_id: number,
    @Ctx() { auth: { userData } }: Context,
  ): Promise<ChatMessageList[]> {
    if (!userData.is_admin) {
      const chat = await Chat.createQueryBuilder('chat')
        .leftJoinAndSelect('chat.custom_transaction', 'cst')
        .leftJoinAndSelect('cst.user', 'usr')
        .where('chat.id = :chat_id', { chat_id })
        .getOneOrFail()
        if (!(chat.custom_transaction.user.id === userData.id)) {
          // return error no access

          throw new UnauthorizedError('Tidak punya akses ke chat ini')
        }
    }

    const chatMesssages = await ChatMessage.createQueryBuilder('chm')
      .where('chm.chat = :chat_id', { chat_id })
      .leftJoinAndSelect('chm.user', 'usr')
      .orderBy('chm.created_at', 'ASC')
      .getMany()

    const res = chatMesssages.map(chatMessage => {
      return {
        ...chatMessage,
        is_my_message: chatMessage.user.id === userData.id,
      } as ChatMessageList
    })

    return res
  }
}