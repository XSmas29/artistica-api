import { Entity, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { User } from './User.entity'
import { Image } from './Image.entity'
import { Chat } from './Chat.entity'
import { TransactionStatus } from './TransactionStatus.entity'
import { Complaint } from './Complaint.entity'

@ObjectType()
@Entity({name: 'custom_transactions'})
export class CustomTransaction extends BaseEntity {
  @Field()
  @PrimaryColumn({length: 50})
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

  @Field(() => [Complaint])
  @TypeormLoader()
  @OneToMany(() => Complaint, complaint => complaint.custom_transaction)
  complaints!: Complaint[]

  @Field()
  @Column({length: 50})
  product_name!: string

  @Field()
  @Column({length: 1000, collation: 'utf8mb4_bin'})
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

  @Field({ nullable: true })
  @Column({ nullable: true, length: 40 })
  resi_number?: string

  @Field({nullable: true})
  @Column({nullable: true})
  shipping_cost?: number

  @Field({nullable: true})
  @Column({nullable: true, length: 25})
  shipping_service?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 50})
  shipping_address?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 25})
  shipping_city?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 10})
  shipping_postal_code?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 15})
  customer_phone?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 50})
  customer_name?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 50})
  customer_email?: string

  @Field({nullable: true})
  @Column({nullable: true, length: 20})
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