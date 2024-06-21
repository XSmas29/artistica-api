import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Chat } from './Chat.entity'
import { User } from './User.entity'

@ObjectType()
@Entity({name: 'chat_messages'})
export class ChatMessage extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  message!: string
  
  @Field(() => Chat)
  @TypeormLoader()
  @ManyToOne(() => Chat, chat => chat.messages)
  chat!: Chat

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.chat_messages)
  user!: User

  @Field()
  @CreateDateColumn()
  createdAt!: Date

  @Field()
  @Column()
  isRead!: boolean
}