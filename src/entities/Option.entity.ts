import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Product } from '@entity/Product.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { OptionValue } from './OptionValue.entity'

@ObjectType()
@Entity({name: 'product_options'})
export class Option extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  // @ManyToOne(() => Product, product => product.option_1 || product.option_2)
  @Field(() => Product)
  @TypeormLoader()
  @ManyToOne(() => Product)
  @JoinColumn()
  product!: Product
  
  @Field(() => [OptionValue])
  @TypeormLoader()
  @OneToMany(() => OptionValue, optionValue => optionValue.option)
  values!: OptionValue[]
}