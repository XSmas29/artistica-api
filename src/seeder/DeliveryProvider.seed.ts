
import { DeliveryProvider } from '@entity/DeliveryProvider.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class DeliveryProviderSeed implements Seeder {
  public async run(): Promise<void> {
    const data: DeliveryProvider[] = [
      {
        id: 1,
        name: 'JNE',
        code: 'jne',
      },
      {
        id: 3,
        name: 'TIKI',
        code: 'tiki',
      },
      {
        id: 4,
        name: 'POS Indonesia',
        code: 'pos',
      }
    ] as DeliveryProvider[]

    const providers = DeliveryProvider.create(data)
    await DeliveryProvider.save(providers)
  }
}