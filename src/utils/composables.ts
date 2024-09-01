import { Variant } from '@entity/Variant.entity'

export const checkUniqueSKU = async (skus: string[], current_product_id?: number) => {
  console.log(skus)
  const query = Variant.createQueryBuilder('variant')
    .where('variant.sku IN (:...skus)', { skus })
  
  current_product_id && query.andWhere('variant.product != :product', { product: current_product_id })

  const sameSKU = await query.getMany()
  console.log(sameSKU)

  const unique = new Set(skus)
  const isUnique = unique.size === skus.length

  if (sameSKU.length > 0 || !isUnique) return false
  else return true
}