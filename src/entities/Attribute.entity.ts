import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Product } from '@entity/Product.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { AttributeOption } from './AttributeOption.entity'
import { VariantValue } from './VariantValue.entity'

@ObjectType()
@Entity({name: 'product_attributes'})
export class Attribute extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Field(() => Product)
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.attributes)
  product!: Product
  
  @Field(() => [AttributeOption])
  @TypeormLoader()
  @OneToMany(() => AttributeOption, attributeOption => attributeOption.attribute)
  options!: AttributeOption[]

  @Field(() => [VariantValue])
  @TypeormLoader()
  @OneToMany(() => VariantValue, variantValue => variantValue.attribute)
  attribute_values!: VariantValue[]
}