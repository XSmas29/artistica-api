import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Field, ObjectType, } from 'type-graphql'
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TransactionHeader } from './TransactionHeader.entity'
import { CustomTransaction } from './CustomTransaction.entity'
import { CourseTransaction } from './CourseTransaction.entity'

@ObjectType()
@Entity({name: 'transaction_statuses'})
export class TransactionStatus extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  status!: string

  @Field(() => [TransactionHeader])
  @TypeormLoader()
  @OneToMany(() => TransactionHeader, header => header.status)
  transactions!: TransactionHeader[]

  @Field(() => [CustomTransaction])
  @TypeormLoader()
  @OneToMany(() => CustomTransaction, custom_transaction => custom_transaction.status)
  custom_transactions!: CustomTransaction[]

  @Field(() => [CourseTransaction])
  @TypeormLoader()
  @OneToMany(() => CourseTransaction, course_transaction => course_transaction.status)
  course_transactions!: CourseTransaction[]
}