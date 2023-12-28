import { Variant } from '@entity/Variant.entity'

export const checkUniqueSKU = async (skus: string[]) => {
  const sameSKU = await Variant.createQueryBuilder('variant')
    .where('variant.sku IN (:...skus)', { skus })
    .getMany()

  const unique = new Set(skus)
  const isUnique = unique.size === skus.length

  if (sameSKU.length > 0 || !isUnique) {
    return false
  }

  return true
}