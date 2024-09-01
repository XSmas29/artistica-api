import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Seeder } from 'typeorm-extension'

export default class TransactionStatusSeed implements Seeder {
  public async run(): Promise<void> {
    const data: TransactionStatus[] = [
      {
        id: 110,
        status: 'Pending',
        category: 1
      },
      {
        id: 120,
        status: 'In Progress',
        category: 1
      },
      {
        id: 130,
        status: 'Shipping',
        category: 1
      },
      {
        id: 140,
        status: 'Arrived',
        category: 1
      },
      {
        id: 150,
        status: 'Complaint',
        category: 1
      },
      {
        id: 160,
        status: 'Completed',
        category: 1
      },
      {
        id: 210,
        status: 'Pending',
        category: 2
      },
      {
        id: 220,
        status: 'In Progress',
        category: 2
      },
      {
        id: 230,
        status: 'Shipping',
        category: 2
      },
      {
        id: 240,
        status: 'Arrived',
        category: 2
      },
      {
        id: 251,
        status: 'Repair - Pending Approval',
        category: 2
      },
      {
        id: 252,
        status: 'Resize - Pending Approval',
        category: 2
      },
      {
        id: 261,
        status: 'Repair In Progress',
        category: 2
      },
      {
        id: 262,
        status: 'Resize In Progress',
        category: 2
      },
      {
        id: 270,
        status: 'Completed',
        category: 2
      },
      {
        id: 310,
        status: 'Pending',
        category: 3
      },
      {
        id: 320,
        status: 'Paid',
        category: 3
      },
      // {
      //   id: 330,
      //   status: 'Completed'
      // },
    ] as TransactionStatus[]

    const transactionStatuses = TransactionStatus.create(data)
    await TransactionStatus.save(transactionStatuses)
  }
}