import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Product } from '@entity/Product.entity'

@ObjectType()
@Entity({name: 'product_images'})
export class Image extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  path!: string

  @Field(() => Variant, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.images)
  variant?: Variant | null

	@Field(() => Product, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.images)
  product?: Product | null
}
