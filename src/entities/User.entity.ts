import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({nullable: true})
  @Column({nullable: true})
  name?: string;

  @Field()
  @Column()
  email!: string;

  @Column({nullable: true})
  password?: string;

  @Field()
  @Column({ default: false })
  isAdmin!: boolean;
}
