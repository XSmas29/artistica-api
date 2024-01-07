import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Material } from '@entity/Material.entity'
import { MaterialData } from '@utils/params'
import { ServerResponse } from '@utils/types'
import { DuplicateEntryError, NotFoundError } from '@utils/errors'

@Resolver(Material)
export class MaterialResolver {

  @Query(() => [Material])
  async materials(
  ): Promise<Material[]> {
    const materials = await Material.find()

    return materials
  }

  @Mutation(() => ServerResponse)
  async addMaterial(
    @Arg('data') data: MaterialData,
  ): Promise<ServerResponse> {
    const material = await Material.findOneBy({ name: data.name })
    if (material) {
      throw new DuplicateEntryError('Material sudah ada')
    }

    await Material.insert({
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil menambahkan material',
    }
  }

  @Mutation(() => ServerResponse)
  async updateMaterial(
    @Arg('id') id: number,
    @Arg('data') data: MaterialData,
  ): Promise<ServerResponse> {
    const material = await Material.findOneBy({ id: id })
    if (!material) {
      throw new NotFoundError('Material tidak ditemukan')
    }

    const sameName = await Material.createQueryBuilder('mat')
      .where('mat.name = :name', { name: data.name })
      .andWhere('mat.id != :id', { id: id })
      .getOne()

    if (sameName) {
      throw new DuplicateEntryError('Material sudah ada')
    }

    await Material.update(material.id, {
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil mengubah material',
    }
  }

  @Mutation(() => ServerResponse)
  async deleteMaterial(
    @Arg('id') id: number,
  ): Promise<ServerResponse> {
    const material = await Material.createQueryBuilder('cat')
      .where('cat.id = :id', { id: id })
      .leftJoinAndSelect('cat.products', 'products')
      .getOne()

    if (!material) {
      throw new NotFoundError('Material tidak ditemukan')
    }

    if (material.products.length > 0) {
      throw new Error('Material tidak dapat dihapus karena masih memiliki produk')
    }

    await Material.delete(material.id)

    return {
      success: true,
      message: 'Berhasil menghapus material',
    }
  }
}