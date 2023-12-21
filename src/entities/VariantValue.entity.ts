import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Variant } from './Variant.entity'
import { Attribute } from './Attribute.entity'
import { AttributeOption } from './AttributeOption.entity'

@ObjectType()
@Entity({name: 'product_variant_values'})
export class VariantValue extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => Variant)
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.values)
  variant!: Variant

  @Field(() => Attribute)
  @TypeormLoader()
  @ManyToOne(() => Attribute, attribute => attribute.values)
  attribute!: Attribute

  @Field(() => AttributeOption)
  @TypeormLoader()
  @ManyToOne(() => AttributeOption, attributeOption => attributeOption.values)
  option!: AttributeOption
}