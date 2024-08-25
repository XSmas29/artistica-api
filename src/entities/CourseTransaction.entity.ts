import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { TypeormLoader } from "@ejekanshjain/type-graphql-dataloader";
import { Course } from "./Course.entity";
import { TransactionStatus } from "./TransactionStatus.entity";

@ObjectType()
@Entity({name: 'course_transactions'})
export class CourseTransaction extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string

  @Field(() => User)
  @TypeormLoader()
  @ManyToOne(() => User, user => user.course_transactions)
  user!: User

  @Field()
  @TypeormLoader()
  @ManyToOne(() => Course, course => course.course_transactions)
  course!: Course

  @Field()
  @Column()
  price!: number

  @Field()
  @Column()
  amount!: number

  @Field()
  @Column()
  total_price!: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  payment_method?: string

  @Field(() => TransactionStatus)
  @TypeormLoader()
  @ManyToOne(() => TransactionStatus, status => status.course_transactions)
  status!: TransactionStatus

  @Field()
  @Column()
  start_date!: Date

  @Field()
  @Column()
  time_slot!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  purchase_date?: Date

  @Field()
  @CreateDateColumn()
  created_at!: Date

  @Field()
  @UpdateDateColumn()
  updated_at!: Date

  @Field()
  @DeleteDateColumn()
  deleted_at!: Date
  
}
