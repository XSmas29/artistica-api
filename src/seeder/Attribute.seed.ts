
import { Seeder } from 'typeorm-extension'
import dotenv from 'dotenv'
import { Attribute } from '@entity/Attribute.entity'
import { Product } from '@entity/Product.entity'
dotenv.config()

// ...

export default class AttributeSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Attribute[] = [
      {
        id: 1,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 17 } }),
      },
      {
        id: 2,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 20 } }),
      },
      {
        id: 3,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 21 } }),
      },
      {
        id: 4,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 22 } }),
      },
      {
        id: 5,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 23 } }),
      },
      {
        id: 6,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 24 } }),
      },
      {
        id: 7,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 25 } }),
      },
      {
        id: 8,
        name: 'Type',
        product: await Product.findOneOrFail({ where: { id: 33 } }),
      },
      {
        id: 9,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 80 } }),
      },
      {
        id: 10,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 90 } }),
      },
      {
        id: 11,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 91 } }),
      },
      {
        id: 12,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 93 } }),
      },
      {
        id: 13,
        name: 'Color',
        product: await Product.findOneOrFail({ where: { id: 94 } }),
      },
    ] as Attribute[]

    const options = Attribute.create(data)
    await Attribute.save(options)
  }
}