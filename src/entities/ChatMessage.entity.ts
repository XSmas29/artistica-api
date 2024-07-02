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

  @Field({nullable: true})
  @Column('longtext', {nullable: true})
  message?: string

  @Field({nullable: true})
  @Column({nullable: true})
  image?: string 
  
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
  created_at!: Date

  @Field()
  @Column({default: false})
  isRead!: boolean
} 