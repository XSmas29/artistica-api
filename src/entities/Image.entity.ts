import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Variant } from '@entity/Variant.entity'
import { TypeormLoader } from 'type-graphql-dataloader'

@ObjectType()
@Entity({name: 'product_images'})
export class Image extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field(() => Variant)
  @TypeormLoader()
  @ManyToOne(() => Variant, variant => variant.images)
  variant!: Variant
}
