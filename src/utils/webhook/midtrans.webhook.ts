import { Router } from 'express'
import * as env from 'env-var'
import crypto from 'crypto'
import { MidtransStatusNotification } from './types'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { CourseTransaction } from '@entity/CourseTransaction.entity'

const router = Router()

router.use((req, res, next) => {
  const { order_id, status_code, gross_amount } = req.body
  const serverkey = env.get('MIDTRANS_SERVER_KEY').required().asString()
  const hash = crypto.createHash('sha512')

  hash.update(`${order_id}${status_code}${gross_amount}${serverkey}`)
  const hashed = hash.digest('hex')

  if (hashed === req.body.signature_key) next()
  else res.status(401).send('Unauthorized')
})

router.get('/test', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

router.post('/success', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

router.post('/status', async (req, res) => {
  const payload = req.body as MidtransStatusNotification
  if (
    payload.status_code === '200' && 
    payload.fraud_status === 'accept' &&
    (payload.transaction_status === 'settlement' || payload.transaction_status === 'capture')
  ) {
    const order_category = payload.order_id.split('-')[0]
    if (order_category === 'ORDER') {
      const order = await TransactionHeader.findOneBy({ id: payload.order_id })
      if (order) {
        order.payment_method = payload.payment_type
        order.status = await TransactionStatus.findOneByOrFail({ id: 120 })
        order.save()
      }
    }
    else if (order_category === 'COURSE') {
      const order = await CourseTransaction.findOneBy({ id: payload.order_id })
      if (order) {
        order.payment_method = payload.payment_type
        order.status = await TransactionStatus.findOneByOrFail({ id: 320 })
        order.save()
      }
    }
  }
  res.status(200).send('OK')
})

export default router