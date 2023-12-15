import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity({name: 'delivery_providers'})
export class DeliveryProvider extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @Column()
  code!: string
}