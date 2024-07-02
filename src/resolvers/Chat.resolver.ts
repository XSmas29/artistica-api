import { Chat } from '@entity/Chat.entity'
import { Context, Roles } from '@utils/types'
import { Authorized, Ctx, Query, Resolver } from 'type-graphql'

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
}