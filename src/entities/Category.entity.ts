import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Product } from '@entity/Product.entity'

@ObjectType()
@Entity({name: 'product_category'})
export class Category extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

	@Field(() => [Product])
  @TypeormLoader()
  @OneToMany(() => Product, product => product.category)
  products!: Product[]
}
