//create a cron job everyday at 00:00

import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { CronJob } from 'cron'


const checkCustomTransactionStatusCronJob = new CronJob(
	'0 0 * * *', // cronTime
	async function () {
		console.log('Cron Job Running')
    //
    const customTransactions = await CustomTransaction.createQueryBuilder('custom_transaction')
      .where('custom_transaction.status = :status', { status: 240 })
      .getMany()

    customTransactions.map(async (transaction) => {
      //if more than 30days since purchase date, change status to 270
      const currentDate = new Date()
      const purchaseDate = transaction.purchase_date!
      const diffTime = Math.abs(currentDate.getTime() - purchaseDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      console.log('diffDays', diffDays)
      if (diffDays > 30) {
        console.log('changing status of transaction ', transaction.id)
        transaction.status = await TransactionStatus.findOneByOrFail({ id: 270 })
        await transaction.save()
      }
    })
    
	},
	null, // onComplete
)

export { checkCustomTransactionStatusCronJob }