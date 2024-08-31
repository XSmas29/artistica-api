import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Complaint } from "./Complaint.entity";
import { TypeormLoader } from "@ejekanshjain/type-graphql-dataloader";

@ObjectType()
@Entity({name: 'complaint_types'})
export class ComplaintType extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => [Complaint])
  @TypeormLoader()
  @OneToMany(() => Complaint, complaint => complaint.type)
  complaints!: Complaint[]

  @Field()
  @Column()
  name!: string
}