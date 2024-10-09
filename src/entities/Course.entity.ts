import { TypeormLoader } from '@ejekanshjain/type-graphql-dataloader'
import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CourseTransaction } from './CourseTransaction.entity'

@ObjectType()
@Entity({name: 'silver_course'})
export class Course extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({length: 25})
  name!: string

  @Field(() => [CourseTransaction])
  @TypeormLoader()
  @OneToMany(() => CourseTransaction, courseTransaction => courseTransaction.course)
  course_transactions!: CourseTransaction[]

  @Field()
  @Column({length: 1000, collation: 'utf8mb4_bin'})
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
  @Column({length: 100})
  time!: string
}