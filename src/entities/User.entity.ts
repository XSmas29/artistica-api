import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({name: 'users'})
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({nullable: true})
  @Column({nullable: true})
  name?: string;

  @Field()
  @Column({unique: true})
  email!: string;

  @Column({nullable: true})
  password?: string;

  @Field()
  @Column({ default: false})
  is_verified!: boolean;

  @Field()
  @Column()
  hash!: string;

  @Field()
  @Column({ default: false })
  isAdmin!: boolean;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;
}
