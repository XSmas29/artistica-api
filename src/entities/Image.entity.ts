import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '../entities/Variant.entity'
import { TypeormLoader } from 'type-graphql-dataloader'
import { Product } from './Product.entity'

@ObjectType()
@Entity({name: 'product_images'})
export class Image extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field(() => Variant, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.images)
  variant?: Variant | null

	@Field(() => Product, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.images)
  product?: Product | null
}
