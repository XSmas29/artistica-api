import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Product } from '@entity/Product.entity'
import { Image } from '@entity/Image.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { VariantValue } from './VariantValue.entity'

@ObjectType()

// @Index('UNIQUE_SKU', ['sku'], { unique: true, where: 'deleted_at IS NULL' })
@Entity({name: 'product_variants'})
export class Variant extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  price!: number

  @Field()
  @Column()
  sku!: string

  @Field()
  @Column()
  stock!: number

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Field(() => Product)
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.variants)
  product!: Product

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.variant)
  images!: Image[]

  @Field(() => [VariantValue])
  @TypeormLoader()
  @OneToMany(() => VariantValue, variantValue => variantValue.variant)
  attribute_values!: VariantValue[]
}
