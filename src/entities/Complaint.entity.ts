import { TypeormLoader } from "@ejekanshjain/type-graphql-dataloader";
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomTransaction } from "./CustomTransaction.entity";
import { ComplaintType } from "./ComplaintType.entity";

@ObjectType()
@Entity({name: 'complaints'})
export class Complaint extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => CustomTransaction)
  @TypeormLoader()
  @ManyToOne(() => CustomTransaction, custom_transaction => custom_transaction.complaints)
  custom_transaction!: CustomTransaction

  @Field(() => ComplaintType)
  @TypeormLoader()
  @ManyToOne(() => ComplaintType, complaint_type => complaint_type.complaints)
  type!: ComplaintType

  @Field()
  @Column()
  description!: string

  @Field({nullable: true})
  @Column({nullable: true})
  image?: string

  @Field({nullable: true})
  @Column()
  is_approved?: boolean

  @Field()
  @CreateDateColumn()
  created_at!: Date

  


  // @Field()
  // @Column()
  // user_id!: number

  // @Field()
  // @Column()
  // title!: string

  // @Field()
  // @Column()
  // description!: string

  // @Field()
  // @Column()
  // status!: string

  // @Field()
  // @Column()
  // created_at!: Date

  // @Field()
  // @Column()
  // updated_at!: Date
}