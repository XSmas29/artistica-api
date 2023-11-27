
import { Seeder } from 'typeorm-extension'
import { Material } from '@entity/Material.entity'

// ...

export default class MaterialSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Material[] = [
      {
        id: 1,
        name: 'Silver 925',
      },
      {
        id: 2,
        name: 'Brass & Bronze',
      },
      {
        id: 3,
        name: 'Beads & Gemstones',
      },
      {
        id: 4,
        name: 'Stainless Steel',
      },
    ] as Material[]

    const materials = Material.create(data)
    await Material.save(materials)
  }
}