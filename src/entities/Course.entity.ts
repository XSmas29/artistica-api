import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity({name: 'silver_course'})
export class Course extends BaseEntity {
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
  price!: number

  @Field()
  @Column()
  price_promo!: number

  @Field()
  @Column()
  promo_min_amount!: number

  @Field()
  @Column()
  time!: string
}