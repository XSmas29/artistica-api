import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Field, ObjectType, } from 'type-graphql'
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TransactionHeader } from './TransactionHeader.entity'

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
}