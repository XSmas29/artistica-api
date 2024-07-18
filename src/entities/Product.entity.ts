import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Image } from '@entity/Image.entity'
import { Category } from '@entity/Category.entity'
import { Material } from '@entity/Material.entity'
import { Attribute } from './Attribute.entity'

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

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date

  @Field(() => Category)
  @TypeormLoader()
  @ManyToOne(() => Category, category => category.products)
  category!: Category

  @Field(() => Material)
  @TypeormLoader()
  @ManyToOne(() => Material, material => material.products)
  material!: Material

  @Field(() => [Attribute])
  @TypeormLoader()
  @OneToMany(() => Attribute, attribute => attribute.product)
  @JoinColumn()
  attributes!: Attribute[]

  @Field(() => [Variant])
  @TypeormLoader()
  @OneToMany(() => Variant, variant => variant.product)
  variants!: Variant[]

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.product)
  images!: Image[]  
}
