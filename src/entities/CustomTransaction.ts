import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { User } from './User.entity'
import { Image } from './Image.entity'

@ObjectType()
@Entity({name: 'custom_transactions'})
export class CustomTransaction extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.custom_transactions)
  user!: User

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.custom_transaction)
  images!: Image[]  

  @Field()
  @Column()
  product_name!: string

  @Field()
  @Column({length: '1000', collation: 'utf8mb4_bin'})
  product_description!: string

  @Field()
  @Column()
  amount!: number

  @Field()
  @Column()
  total_price!: number

  @Field()
  @Column()
  total_weight!: number

  @Field()
  @Column()
  shipping_cost?: number

  @Field()
  @Column()
  shipping_service?: string

  @Field()
  @Column()
  shipping_address?: string

  @Field()
  @Column()
  shipping_province?: number

  @Field()
  @Column()
  shipping_city?: number

  @Field()
  @Column()
  shipping_postal_code?: string

  @Field()
  @Column()
  customer_phone?: string

  @Field()
  @Column()
  customer_name?: string

  @Field()
  @Column()
  customer_email?: string

  @Field()
  @Column()
  payment_method?: string

  @Field()
  @Column()
  status!: number

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