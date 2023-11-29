import { Query, Resolver } from 'type-graphql'
import { Material } from '@entity/Material.entity'

@Resolver(Material)
export class MaterialResolver {

  @Query(() => [Material])
  async materials(
  ): Promise<Material[]> {
    const materials = await Material.find()

    return materials
  }
}