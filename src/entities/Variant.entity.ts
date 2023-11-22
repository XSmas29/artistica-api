import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Product } from '../entities/Product.entity'
import { Image } from '../entities/Image.entity'
import { TypeormLoader } from 'type-graphql-dataloader'

@ObjectType()
@Entity({name: 'product_variants'})
export class Variant extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @Column()
  price!: number

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
