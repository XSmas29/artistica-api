import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TransactionHeader } from './TransactionHeader.entity'
import { Variant } from './Variant.entity'

@ObjectType()
@Entity({name: 'transaction_details'})
export class TransactionDetail extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => TransactionHeader)
  @TypeormLoader()
  @ManyToOne(() => TransactionHeader, header => header.details)
  header!: TransactionHeader
  
  @Field(() => Variant)
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.transaction_details)
  variant!: Variant

  @Field()
  @Column()
  price!: number

  @Field()
  @Column()
  quantity!: number
}