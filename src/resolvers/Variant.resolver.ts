import { Image } from '@entity/Image.entity'
import { Variant } from '@entity/Variant.entity'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { FieldResolver, Resolver, Root } from 'type-graphql'
import { In } from 'typeorm'
import * as env from 'env-var'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'

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
}