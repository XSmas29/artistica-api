import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Seeder } from 'typeorm-extension'

export default class TransactionStatusSeed implements Seeder {
  public async run(): Promise<void> {
    const data: TransactionStatus[] = [
      {
        id: 110,
        status: 'Pending'
      },
      {
        id: 120,
        status: 'In Progress'
      },
      {
        id: 130,
        status: 'Shipping'
      },
      {
        id: 140,
        status: 'Arrived'
      },
      {
        id: 150,
        status: 'Complaint'
      },
      {
        id: 160,
        status: 'Completed'
      },
      {
        id: 210,
        status: 'Pending'
      },
      {
        id: 220,
        status: 'In Progress'
      },
      {
        id: 230,
        status: 'Shipping'
      },
      {
        id: 240,
        status: 'Arrived'
      },
      {
        id: 250,
        status: 'Complaint'
      },
      {
        id: 260,
        status: 'Completed'
      },
      {
        id: 310,
        status: 'Pending'
      },
      {
        id: 320,
        status: 'Paid'
      },
    ] as TransactionStatus[]

    const transactionStatuses = TransactionStatus.create(data)
    await TransactionStatus.save(transactionStatuses)
  }
}