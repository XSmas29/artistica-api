import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '../entities/Variant.entity'
import { TypeormLoader } from 'type-graphql-dataloader'
import { Image } from './Image.entity'

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
  @Column({length:'1000', collation: 'utf8mb4_bin'})
  description!: string

  @Field()
  @Column()
  slug!: string

  @Field()
  @Column({default: true})
  single_variant!: boolean

  @Field(() => [Variant])
  @TypeormLoader()
  @OneToMany(() => Variant, variant => variant.product)
  variants!: Variant[]

  @Field(() => [Image])
  @TypeormLoader()
  @OneToMany(() => Image, image => image.product)
  images!: Image[]
}
