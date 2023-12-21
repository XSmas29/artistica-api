import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from '@xsmas29/type-graphql-dataloader'
import { Image } from '@entity/Image.entity'
import { Category } from '@entity/Category.entity'
import { Material } from '@entity/Material.entity'
import { Option } from './Option.entity'

@ObjectType()
@Entity({name: 'products'})
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @Column({length: '1000', collation: 'utf8mb4_bin'})
  description!: string

  @Field()
  @Column()
  slug!: string

  @Field()
  @Column({default: true})
  single_variant!: boolean

  @Field(() => Category)
  @TypeormLoader()
  @ManyToOne(() => Category, category => category.products)
  category!: Category

  @Field(() => Material)
  @TypeormLoader()
  @ManyToOne(() => Material, material => material.products)
  material!: Material

  @Field(() => Option)
  @TypeormLoader()
  @ManyToOne(() => Option, option => option.product)
  option_1!: Option

  @Field(() => Option)
  @TypeormLoader()
  @ManyToOne(() => Option, option => option.product)
  option_2!: Option

  @Field(() => [Variant])
  @TypeormLoader()
  @OneToMany(() => Variant, variant => variant.product)
  variants!: Variant[]

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.product)
  images!: Image[]  
}
