import { Image } from '@entity/Image.entity'
import { Variant } from '@entity/Variant.entity'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { In } from 'typeorm'
import * as env from 'env-var'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'
import { CartParams } from '@utils/params'
import { CartData } from '@utils/product.type'

@Resolver(Variant)
export class VariantResolver {
  @FieldResolver()
  @Loader<number, Image[]>(async ids => {
    const images = await Image.find({
      where: { variant: { id: In([...ids]) } },
      relations: ['variant', 'product'],
    })
    const base_url = env.get('BASE_URL').required().asString()
    images.forEach(image => image.path = `${base_url}/products/${image.product!.id.toString()}/${image.path}`)
    const imagesById = groupBy(images, 'variant.id')

    return ids.map(id => imagesById[id] ?? [])
  })
  images(@Root() root: Variant) {
    return (dataloader: DataLoader<number, Image[]>) =>
      dataloader.load(root.id)
  }

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