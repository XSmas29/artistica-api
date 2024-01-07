import { Image } from '@entity/Image.entity'
import { Variant } from '@entity/Variant.entity'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { Arg, Authorized, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { In } from 'typeorm'
import * as env from 'env-var'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'
import { CartParams } from '@utils/params'
import { CartData } from '@utils/product.type'

@Resolver(Variant)
export class VariantResolver {
  @FieldResolver()
  async image(@Root() root: Variant) {
    const image = await Image.createQueryBuilder('img')
    .leftJoinAndSelect('img.variant', 'variant')
      .where('img.variant = :id', { id: root.id })
      .getOne()
    if (image) {
      const base_url = env.get('BASE_URL').required().asString()
      image.path = `${base_url}/variants/${image.variant!.id.toString()}/${image.path}`
    }

    return image
  }

  @Authorized(['USER'])
  @Query(() => [CartData])
  async cartData(
    @Arg('data', () => [CartParams]) data: [CartParams],
  ): Promise<CartData[]> {
    const variant_ids = data.map(d => d.variant_id)
    const variants = await Variant.createQueryBuilder('var')
      .whereInIds(variant_ids)
      .getMany()

    const ret: CartData[] = data.map(d => {
      const variant = variants.find(v => v.id === d.variant_id)
      if (!variant) {
        throw new Error('Variant tidak ditemukan')
      }

      return {
        variant,
        quantity: d.quantity,
      } as CartData
    })

    return ret
  }
}