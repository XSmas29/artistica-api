import { ChatMessage } from '@entity/ChatMessage.entity'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class ChatMessageList extends ChatMessage{
  @Field()
  is_my_message!: boolean
}

export {
  ChatMessageList
}