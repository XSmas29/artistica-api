import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Product } from '@entity/Product.entity'
import { Image } from '@entity/Image.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { OptionValue } from './OptionValue.entity'

@ObjectType()
@Entity({name: 'product_variants'})
export class Variant extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  price!: number

  @Field(() => OptionValue)
  @TypeormLoader()
  @ManyToOne(() => OptionValue, optionValue => optionValue.variants)
  option_1_value!: OptionValue
  
  @Field(() => OptionValue)
  @TypeormLoader()
  @ManyToOne(() => OptionValue, optionValue => optionValue.variants)
  option_2_value!: OptionValue

  @Field()
  @Column({unique: true})
  sku!: string

  @Field()
  @Column()
  stock!: number

  @Field(() => Product)
  @TypeormLoader()
  @ManyToOne(() => Product, product => product.variants)
  product!: Product

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.variant)
  images!: Image[]
}
