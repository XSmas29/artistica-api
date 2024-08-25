import { Entity, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, PrimaryColumn, BeforeInsert } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { User } from './User.entity'
import { TransactionDetail } from '@entity/TransactionDetail.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
@ObjectType()
@Entity({name: 'transaction_headers'})
export class TransactionHeader extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.transactions)
  user!: User

  @Field(() => [TransactionDetail])
  @TypeormLoader()
  @OneToMany(() => TransactionDetail, detail => detail.header)
  details!: TransactionDetail[]

  @Field(() => TransactionStatus)
  @TypeormLoader()
  @ManyToOne(() => TransactionStatus, status => status.transactions)
  status!: TransactionStatus

  @Field()
  @Column()
  total_price!: number

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
  shipping_city!: string

  @Field()
  @Column()
  shipping_postal_code!: string

  @Field()
  @Column()
  customer_phone?: string

  @Field()
  @Column()
  customer_name!: string

  @Field()
  @Column()
  customer_email!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
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

  @BeforeInsert()
  async capitalizeShipping() {
    this.shipping_service = this.shipping_service.toUpperCase()
  }
}