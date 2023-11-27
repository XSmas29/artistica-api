
import { Seeder } from 'typeorm-extension'
import { Category } from '@entity/Category.entity'

// ...

export default class CategorySeed implements Seeder {
  public async run(): Promise<void> {
    const data: Category[] = [
      {
        id: 1,
        name: 'Ring',
      },
      {
        id: 2,
        name: 'Bracellet',
      },
      {
        id: 3,
        name: 'Necklace',
      },
      {
        id: 4,
        name: 'Earrings',
      },
      {
        id: 5,
        name: 'Pendant',
      },
      {
        id: 6,
        name: 'Others',
      },
    ] as Category[]

    const categories = Category.create(data)
    await Category.save(categories)
  }
}