import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { User } from './User.entity'
import { TransactionDetail } from '@entity/TransactionDetail.entity'

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

  @Field(() => [TransactionDetail])
  @TypeormLoader()
  @OneToMany(() => TransactionDetail, detail => detail.header)
  details!: TransactionDetail[]

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
  shipping_service!: string

  @Field()
  @Column()
  shipping_address!: string

  @Field()
  @Column()
  shipping_province!: number

  @Field()
  @Column()
  shipping_city!: number

  @Field()
  @Column()
  shipping_postal_code!: string

  @Field()
  @Column()
  customer_phone!: string

  @Field()
  @Column()
  customer_name!: string

  @Field()
  @Column()
  customer_email!: string

  @Field()
  @Column()
  payment_method!: string

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