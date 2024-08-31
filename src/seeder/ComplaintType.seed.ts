
import { Seeder } from 'typeorm-extension'
import { ComplaintType } from '@entity/ComplaintType.entity'

// ...

export default class ComplaintTypeSeed implements Seeder {
  public async run(): Promise<void> {
    const data: ComplaintType[] = [
      {
        id: 1,
        name: 'Repair',
      },
      {
        id: 2,
        name: 'Resize',
      },
    ] as ComplaintType[]

    const types = ComplaintType.create(data)
    await ComplaintType.save(types)
  }
}