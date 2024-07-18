import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Product } from '@entity/Product.entity'

@ObjectType()
@Entity({name: 'product_material'})
export class Material extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

	@Field(() => [Product])
  @TypeormLoader()
  @OneToMany(() => Product, product => product.material)
  products!: Product[]
}
