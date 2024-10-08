import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
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
  @Column({nullable: true, length: 1000})
  message?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 50})
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

  @Field({nullable: true})
  @Column({nullable: true})
  quotation_price?: number

  @Field()
  @Column({default: false})
  is_quotation_active!: boolean
} 