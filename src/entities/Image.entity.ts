import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
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
  @OneToOne(() => Variant, variant => variant.image)
  @JoinColumn()
  variant?: Variant | null

	@Field(() => Product, {nullable: true})
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.images)
  product?: Product | null
}
