import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from 'type-graphql-dataloader'
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
  @Column()
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
}
