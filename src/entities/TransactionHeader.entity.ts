import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { User } from './User.entity'

@ObjectType()
@Entity({name: 'transaction_headers'})
export class TransactionHeader extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.transactions)
  user!: User

  @Field()
  @Column()
  total_price!: number

  @Field()
  @Column()
  total_weight!: number

  @Field()
  @Column()
  shipping_cost!: number

  @Field()
  @Column()
  shipping_courier!: string

  @Field()
  @Column()
  shipping_service!: string

  @Field()
  @Column()
  shipping_address!: string

  @Field()
  @Column()
  shipping_province_id!: number

  @Field()
  @Column()
  shipping_city_id!: number

  @Field()
  @Column()
  shipping_postal_code!: string

  @Field()
  @Column()
  shipping_phone!: string

  @Field()
  @Column()
  shipping_name!: string

  @Field()
  @Column()
  payment_method!: string

  @Field()
  @Column()
  payment_status!: string

  @Field()
  @Column()
  payment_expiration!: Date

  @Field()
  @Column()
  payment_code!: string

  @Field()
  @Column()
  payment_url!: string

  @Field()
  @Column()
  status!: string

  @Field()
  @CreateDateColumn()
  created_at!: Date

  @Field()
  @UpdateDateColumn()
  updated_at!: Date

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date
}