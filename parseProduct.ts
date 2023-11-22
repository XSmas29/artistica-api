import data from './products'
let prod_ctr = 0
let variant_ctr = 0
let img_ctr = 0
const parsedProduct = data.map(product => {
  prod_ctr++
  const variants = product.variants.map(variant => {
    variant_ctr++
    
    return {
      id: variant_ctr,
      name: variant.details[0].name,
      price: variant.basePrices[0].value,
      sku: variant.SKU,
      stock: variant.stocks.total >= 0 ? variant.stocks.total : 0,

      images: variant.imageURLs,
      product_id: prod_ctr,
    }
  })

  return {
      id: prod_ctr,
      name: product.details[0].name,
      description: product.details[0].description,
      slug: product.slug,
      single_variant: product.variants.length === 1,
      images: product.imageURLs,
      variants,
  }
})
const images: { id: number; name: string; variant_id: number; product_id: number }[] = []

const variants: { id: number; name: string; price: number; sku: string; stock: number; product_id: number; images: string[] }[] = []
parsedProduct.forEach(product => {
  variants.push(...product.variants)
  product.images.forEach(image => {
    img_ctr++
    images.push({
      id: img_ctr,
      name: image,
      variant_id: -1,
      product_id: product.id,
    })
  })
})

variants.forEach(variant => {
  variant.images.forEach(image => {
    img_ctr++
    images.push({
      id: img_ctr,
      name: image,
      variant_id: variant.id,
      product_id: variant.product_id,
    })
  })
})
console.log(variants)
console.log(images.slice(200))