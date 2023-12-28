import { Attribute } from '@entity/Attribute.entity'

export const createSlug = (name: string) => {
  return name.toLowerCase().replace(/ /g, '-')
}

// export const fillVariantValues = (attributes: Attribute[], obj: any, index: number, values: any[]) => {
//   if (index === attributes.length) {
//     values.push(obj)

//     return
//   }

//   attributes[index].options.forEach(option => {
//     fillVariantValues(attributes, {...obj, [attributes[index].name]: option.name}, index + 1, values)
//   })
// }

export const fillVariantValues = (arrays: Attribute[], index: number, current: number[], result: number[][]) => {
  if (index === arrays.length) {
    result.push([...current])

    return
  }

  for (let i = 0; i < arrays[index].options.length; i++) {
    current.push(arrays[index].options[i].id)
    fillVariantValues(arrays, index + 1, current, result)
    current.pop()
  }
}