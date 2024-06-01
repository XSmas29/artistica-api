import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { TransactionHeader } from './TransactionHeader.entity'
import { CustomTransaction } from './CustomTransaction'

@ObjectType()
@Entity({name: 'users'})
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({nullable: true})
  first_name!: string

  @Field({nullable: true})
  @Column({nullable: true})
  last_name?: string

  @Field({nullable: true})
  @Column({nullable: true})
  phone?: string

  @Field()
  @Column({unique: true})
  email!: string

  @Column({nullable: true})
  password!: string

  @Field()
  @Column({ default: false})
  is_verified!: boolean

  @Field()
  @Column()
  hash!: string

  @Field()
  @Column({ default: false })
  is_admin!: boolean

  @Field()
  @CreateDateColumn()
  created_at!: Date

  @Field()
  @UpdateDateColumn()
  updated_at!: Date

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Column({nullable: true, length: 1000})
  refresh_token!: string

  @Field(() => [TransactionHeader])
  @TypeormLoader()
  @OneToMany(() => TransactionHeader, trans => trans.user)
  transactions!: TransactionHeader[]

  @Field(() => [CustomTransaction])
  @TypeormLoader()
  @OneToMany(() => CustomTransaction, customTransaction => customTransaction.user)
  custom_transactions!: CustomTransaction[]
}
