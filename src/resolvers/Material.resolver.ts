import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { Material } from '@entity/Material.entity'
import { MaterialData, pagination } from '@utils/params'
import { ServerResponse } from '@utils/types'
import { DuplicateEntryError, NotFoundError } from '@utils/errors'
import { MaterialList, filterMaterials } from '@utils/material.type'

@Resolver(Material)
export class MaterialResolver {

  @Query(() => MaterialList)
  async materials(
    @Arg('filter', { nullable: true }) filter?: filterMaterials,
    @Arg('pagination', { nullable: true }) pagination?: pagination,
  ): Promise<MaterialList> {
    const materialsQuery = Material.createQueryBuilder('mat')

    if (filter?.search) {
      materialsQuery.where('mat.name LIKE :search', { search: `%${filter.search}%` })
    }

    if (pagination) {
      materialsQuery.limit(pagination.limit)
      materialsQuery.offset((pagination.page - 1) * pagination.limit)
    }

    const materials = await materialsQuery.getManyAndCount()

    return {
      count: materials[1],
      materials: materials[0],
    }
  }

  @Authorized(['ADMIN'])
  @Mutation(() => ServerResponse)
  async addMaterial(
    @Arg('data') data: MaterialData,
  ): Promise<ServerResponse> {
    const material = await Material.findOneBy({ name: data.name })
    if (material) {
      throw new DuplicateEntryError('Material sudah ada')
    }

    if (!data.name) {
      throw new Error('Nama material tidak boleh kosong')
    }

    await Material.insert({
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil menambahkan material',
    }
  }

  @Authorized(['ADMIN'])
  @Mutation(() => ServerResponse)
  async updateMaterial(
    @Arg('id') id: number,
    @Arg('data') data: MaterialData,
  ): Promise<ServerResponse> {
    const material = await Material.findOneBy({ id: id })
    if (!material) {
      throw new NotFoundError('Material tidak ditemukan')
    }

    if (!data.name) {
      throw new Error('Nama kategori tidak boleh kosong')
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

  @Authorized(['ADMIN'])
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