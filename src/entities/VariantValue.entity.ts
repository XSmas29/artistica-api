import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Variant } from './Variant.entity'
import { Attribute } from './Attribute.entity'
import { AttributeOption } from './AttributeOption.entity'

@ObjectType()
@Entity({name: 'product_variant_values'})
export class VariantValue extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Field(() => Variant)
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.attribute_values)
  variant!: Variant

  @Field(() => Attribute)
  @TypeormLoader()
  @ManyToOne(() => Attribute, attribute => attribute.attribute_values)
  attribute!: Attribute

  @Field(() => AttributeOption)
  @TypeormLoader()
  @ManyToOne(() => AttributeOption, attributeOption => attributeOption.attribute_values)
  option!: AttributeOption
}