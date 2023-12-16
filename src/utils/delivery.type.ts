import { Field, InputType, ObjectType } from 'type-graphql'

type CourierOption = 'jne' | 'pos' | 'tiki'
type RajaOngkirTier = 'starter' | 'basic' | 'pro'

@InputType()
class ParamDeliveryService {
  @Field()
  origin!: string
  @Field()
  destination!: string
  @Field()
  weight!: string
  @Field(() => String)
  courier!: CourierOption
}

@ObjectType()
class DeliveryService {
  @Field()
  service!: string
  @Field()
  description!: string
  @Field()
  cost!: number
  @Field()
  etd!: string
  @Field()
  note!: string
}

export {
  ParamDeliveryService,
  CourierOption,
  DeliveryService,
  RajaOngkirTier,
}