import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CustomTransaction } from './CustomTransaction.entity'
import { ChatMessage } from './ChatMessage.entity'

@ObjectType()
@Entity({name: 'chat'})
export class Chat extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  title!: string
  
  @Field(() => CustomTransaction)
  @TypeormLoader()
  @JoinColumn()
  @OneToOne(() => CustomTransaction, customTransaction => customTransaction.chat)
  custom_transaction!: CustomTransaction

  @Field(() => [ChatMessage])
  @TypeormLoader()
  @OneToMany(() => ChatMessage, chatMessage => chatMessage.chat)
  messages!: ChatMessage[]
}