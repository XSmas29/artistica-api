import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Option } from './Option.entity'
import { Variant } from './Variant.entity'

@ObjectType()
@Entity({name: 'product_option_values'})
export class OptionValue extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field(() => Option)
  @TypeormLoader()
  @ManyToOne(() => Option, option => option.values)
  option!: Option
  
  @Field(() => [Variant])
  @TypeormLoader()
  @OneToMany(() => Variant, variant => variant.option_1_value || variant.option_2_value)
  variants!: Variant[]
}