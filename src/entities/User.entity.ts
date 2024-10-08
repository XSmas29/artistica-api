import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { TransactionHeader } from './TransactionHeader.entity'
import { CustomTransaction } from './CustomTransaction.entity'
import { ChatMessage } from './ChatMessage.entity'
import { CourseTransaction } from './CourseTransaction.entity'

@ObjectType()
@Entity({name: 'users'})
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field({nullable: true})
  @Column({nullable: true, default: '', length: 25})
  first_name!: string

  @Field()
  @Column({default: '', length: 25})
  last_name!: string

  @Field({nullable: true})
  @Column({nullable: true, length: 25})
  phone?: string

  @Field()
  @Column({unique: true, length: 50})
  email!: string

  @Column({nullable: true, length: 100})
  password!: string

  @Field()
  @Column({ default: false})
  is_verified!: boolean

  @Field()
  @Column({ length: 255 })
  hash!: string

  @Field(() => String, {nullable: true})
  @Column("varchar", {nullable: true, length: 255})
  reset_password_hash?: string | null

  @Field()
  @Column({ default: false })
  is_admin!: boolean

  @Field()
  @CreateDateColumn()
  created_at!: Date

  @Field()
  @UpdateDateColumn()
  updated_at!: Date

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Column({nullable: true, length: 500})
  refresh_token!: string

  @Field(() => [TransactionHeader])
  @TypeormLoader()
  @OneToMany(() => TransactionHeader, trans => trans.user)
  transactions!: TransactionHeader[]

  @Field(() => [CustomTransaction])
  @TypeormLoader()
  @OneToMany(() => CustomTransaction, customTransaction => customTransaction.user)
  custom_transactions!: CustomTransaction[]

  @Field(() => [CourseTransaction])
  @TypeormLoader()
  @OneToMany(() => CourseTransaction, courseTransaction => courseTransaction.user)
  course_transactions!: CourseTransaction[]

  @Field(() => [ChatMessage])
  @TypeormLoader()
  @OneToMany(() => ChatMessage, chatMessage => chatMessage.user)
  chat_messages!: ChatMessage[]
}
