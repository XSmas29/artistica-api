import { Chat } from '@entity/Chat.entity'
import { ChatMessage } from '@entity/ChatMessage.entity'
import { ChatMessageList } from '@utils/chat.type'
import { UnauthorizedError } from '@utils/errors'
import { uploadFile } from '@utils/files'
import { ChatMessageData } from '@utils/params'
import { Context, Roles, ServerResponse } from '@utils/types'
import { parse } from 'path'
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import * as env from 'env-var'
import { Image } from '@entity/Image.entity'

@Resolver(ChatMessage)
export class ChatMessageResolver {
  @FieldResolver(() => String)
  async image(@Root() chatMessage: ChatMessage) {
    const data = await ChatMessage.createQueryBuilder('chm')
      .where('chm.id = :chatMessageId', { chatMessageId: chatMessage.id })
      .leftJoinAndSelect('chm.chat', 'cht')
      .getOneOrFail()
    const base_url = env.get('BASE_URL').required().asString()
    
    return chatMessage.image ? `${base_url}/chat/${data.chat!.id.toString()}/${chatMessage.image}` : null
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

    const res = await chatMessage.save()

    const base_url = env.get('BASE_URL').required().asString()
    res.image = res.image ? `${base_url}/chat/${res.chat!.id.toString()}/${res.image}` : undefined

    return {
      success: true,
      message: 'Berhasil mengirim pesan',
      data: JSON.stringify(res),
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

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async addQuotationMessage(
    @Arg('id') id: number,
    @Arg('price') price: number,
    @Ctx() { auth: { userData } }: Context,
  ): Promise<ServerResponse> {

    const previousQuotations = await ChatMessage.createQueryBuilder('cm')
      .where('cm.chat = :id', { id })
      .andWhere('cm.is_quotation_active = true')
      .getMany()
    
    await Promise.all(previousQuotations.map(async quotation => {
      quotation.is_quotation_active = false
      await quotation.save()
    }))

    const chatMessage = ChatMessage.create({
      chat: await Chat.findOneByOrFail({ id }),
      user: userData,
      quotation_price: price,
      is_quotation_active: true,
    })

    await chatMessage.save()

    const res = await ChatMessage.createQueryBuilder('chm')
      .where('chm.id = :chatMessageId', { chatMessageId: chatMessage.id })
      .leftJoinAndSelect('chm.chat', 'cht')
      .leftJoinAndSelect('chm.user', 'usr')
      .leftJoinAndSelect('cht.custom_transaction', 'cst')
      .leftJoinAndSelect('cst.images', 'img')
      .getOneOrFail()

    res.chat.custom_transaction.images = res.chat.custom_transaction.images.map(image => {
      const base_url = env.get('BASE_URL').required().asString()
      return {
        ...image,
        path: `${base_url}/custom_transaction/${res.chat.custom_transaction.id.toString()}/${image.path}`
      } as Image
    })

    return {
      success: true,
      message: 'Berhasil mengirim penawaran harga',
      data: JSON.stringify(res),
    }
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Query(() => ChatMessage)
  async chatMessageDetail(
    @Arg('id') id: number,
  ): Promise<ChatMessage> {
    const chatMesssage = await ChatMessage.createQueryBuilder('chm')
    .where('id = :id', { id })
    .getOneOrFail()

    return chatMesssage
  }
}