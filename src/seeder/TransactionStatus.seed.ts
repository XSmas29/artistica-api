import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Seeder } from 'typeorm-extension'

export default class TransactionStatusSeed implements Seeder {
  public async run(): Promise<void> {
    const data: TransactionStatus[] = [
      {
        id: 1,
        status: 'Pending'
      },
      {
        id: 2,
        status: 'In Progress'
      },
      {
        id: 3,
        status: 'Delivered'
      },
      {
        id: 4,
        status: 'Completed'
      }
    ] as TransactionStatus[]

    const transactionStatuses = TransactionStatus.create(data)
    await TransactionStatus.save(transactionStatuses)
  }
}