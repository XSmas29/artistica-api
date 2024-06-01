import { Router } from 'express'
import * as env from 'env-var'
import crypto from 'crypto'
import { MidtransStatusNotification } from './types'

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

router.post('/status', (req, res) => {
  const payload = req.body as MidtransStatusNotification

  if (payload.status_code === '201') {
    //
  }
  if (payload.status_code === '200' && payload.transaction_status === 'settlement' && payload.fraud_status === 'accept') {
    console.log(payload)
  }
  res.status(200).send('OK')
})

export default router