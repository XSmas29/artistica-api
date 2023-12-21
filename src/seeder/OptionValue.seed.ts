
import { Seeder } from 'typeorm-extension'
import dotenv from 'dotenv'
import { OptionValue } from '@entity/OptionValue.entity'
import { Option } from '@entity/Option.entity'
dotenv.config()

// ...

export default class OptionValueSeed implements Seeder {
  public async run(): Promise<void> {
    const data: OptionValue[] = [
      {
        id: 1,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 1 } }),
      },
      {
        id: 2,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 1 } }),
      },
      {
        id: 3,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 2 } }),
      },
      {
        id: 4,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 2 } }),
      },
      {
        id: 5,
        name: 'Black',
        option: await Option.findOneOrFail({ where: { id: 3 } }),
      },
      {
        id: 6,
        name: 'White',
        option: await Option.findOneOrFail({ where: { id: 3 } }),
      },
      {
        id: 7,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 4 } }),
      },
      {
        id: 8,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 4 } }),
      },
      {
        id: 9,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 5 } }),
      },
      {
        id: 10,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 5 } }),
      },
      {
        id: 11,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 5 } }),
      },
      {
        id: 12,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 6 } }),
      },
      {
        id: 13,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 6 } }),
      },
      {
        id: 14,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 7 } }),
      },
      {
        id: 15,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 7 } }),
      },
      {
        id: 16,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 7 } }),
      },
      {
        id: 17,
        name: '01',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 18,
        name: '02',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 19,
        name: '03',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 20,
        name: '04',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 21,
        name: '05',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 22,
        name: '06',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 23,
        name: '07',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 24,
        name: '08',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 25,
        name: '09',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 26,
        name: '10',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 27,
        name: '11',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 28,
        name: '12',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 29,
        name: '13',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 30,
        name: '14',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 31,
        name: '15',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 32,
        name: '16',
        option: await Option.findOneOrFail({ where: { id: 8 } }),
      },
      {
        id: 33,
        name: 'Merah Garnet',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 34,
        name: 'Ungu Amethyst',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 35,
        name: 'Biru Aquamarine',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 36,
        name: 'Putih Diamond',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 37,
        name: 'Hijau Emerald',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 38,
        name: 'Putih Moonstone',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 39,
        name: 'Biru Sapphire',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 40,
        name: 'Yellow Citrine',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 41,
        name: 'Hijau Peridot',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 42,
        name: 'Green Turquoise',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 43,
        name: 'Pink Ruby',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 44,
        name: 'Black Tourmaline',
        option: await Option.findOneOrFail({ where: { id: 9 } }),
      },
      {
        id: 45,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 10 } }),
      },
      {
        id: 46,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 10 } }),
      },
      {
        id: 47,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 11 } }),
      },
      {
        id: 48,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 11 } }),
      },
      {
        id: 49,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 11 } }),
      },
      {
        id: 50,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 12 } }),
      },
      {
        id: 51,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 12 } }),
      },
      {
        id: 52,
        name: 'Gold',
        option: await Option.findOneOrFail({ where: { id: 13 } }),
      },
      {
        id: 53,
        name: 'Rose',
        option: await Option.findOneOrFail({ where: { id: 13 } }),
      },
      {
        id: 54,
        name: 'Silver',
        option: await Option.findOneOrFail({ where: { id: 13 } }),
      },
    ] as OptionValue[]

    const values = OptionValue.create(data)
    await OptionValue.save(values)
  }
}