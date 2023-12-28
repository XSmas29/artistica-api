import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Attribute } from './Attribute.entity'
import { VariantValue } from './VariantValue.entity'

@ObjectType()
@Entity({name: 'product_attribute_options'})
export class AttributeOption extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Field(() => Attribute)
  @TypeormLoader()
  @ManyToOne(() => Attribute, option => option.options)
  attribute!: Attribute

  @Field(() => [VariantValue])
  @TypeormLoader()
  @OneToMany(() => VariantValue, variantValue => variantValue.option)
  attribute_values!: VariantValue[]
  
  // @Field(() => [Variant])
  // @TypeormLoader()
  // @OneToMany(() => Variant, variant => variant.option_1_value || variant.option_2_value)
  // variants!: Variant[]
}