import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Product } from '@entity/Product.entity'
import { CustomTransaction } from './CustomTransaction.entity'

@ObjectType()
@Entity({name: 'product_images'})
export class Image extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({length: 50})
  path!: string

  @Field(() => Variant, {nullable: true})
  @TypeormLoader()
  @OneToOne(() => Variant, variant => variant.image)
  @JoinColumn()
  variant?: Variant | null

	@Field(() => Product, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.images)
  product?: Product | null

  @Field(() => CustomTransaction, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => CustomTransaction, customTransaction => customTransaction.images)
  custom_transaction?: CustomTransaction | null

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date
}
