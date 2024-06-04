import { Field, ObjectType, } from 'type-graphql'
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity({name: 'transaction_statuses'})
export class TransactionStatus extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  status!: string
}