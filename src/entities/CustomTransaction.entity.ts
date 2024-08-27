import { Entity, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { User } from './User.entity'
import { Image } from './Image.entity'
import { Chat } from './Chat.entity'
import { TransactionStatus } from './TransactionStatus.entity'

@ObjectType()
@Entity({name: 'custom_transactions'})
export class CustomTransaction extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.custom_transactions)
  user!: User

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.custom_transaction)
  images!: Image[]

  @Field(() => Chat)
  @TypeormLoader()
  @JoinColumn()
  @OneToOne(() => Chat, chat => chat.custom_transaction)
  chat!: Chat 

  @Field()
  @Column()
  product_name!: string

  @Field()
  @Column({length: '1000', collation: 'utf8mb4_bin'})
  product_description!: string

  @Field()
  @Column()
  amount!: number

  @Field(() => TransactionStatus)
  @TypeormLoader()
  @ManyToOne(() => TransactionStatus, status => status.custom_transactions)
  status!: TransactionStatus

  @Field({nullable: true})
  @Column({nullable: true})
  price?: number

  @Field({nullable: true})
  @Column({nullable: true})
  total_price?: number

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_cost?: number

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_service?: string

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_address?: string

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_city?: string

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_postal_code?: string

  @Field({nullable: true})
  @Column({nullable: true})
  customer_phone?: string

  @Field({nullable: true})
  @Column({nullable: true})
  customer_name?: string

  @Field({nullable: true})
  @Column({nullable: true})
  customer_email?: string

  @Field({nullable: true})
  @Column({nullable: true})
  payment_method?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  purchase_date?: Date

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