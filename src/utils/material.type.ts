import { Material } from '@entity/Material.entity'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
class MaterialList {
  @Field()
  count!: number
  @Field(() => [Material])
  materials!: Material[]
}

@InputType()
class filterMaterials {
  @Field(() => String, {nullable: true})
  search?: string | null
}

export {
  MaterialList,
  filterMaterials,
}