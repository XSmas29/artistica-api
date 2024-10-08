import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity({name: 'delivery_providers'})
export class DeliveryProvider extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({length: 25})
  name!: string

  @Field()
  @Column({length: 10})
  code!: string
}