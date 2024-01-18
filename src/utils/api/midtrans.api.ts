import { CreditCard, CustomerDetail, ItemDetail, MTCreateTransResp, TransactionDetail } from '@utils/transaction.type'
import axios from 'axios'
import * as env from 'env-var'

class MidTrans {
  is_production: boolean
  base_url: string

  constructor(is_production: boolean) {
    this.is_production = is_production
    this.base_url = this.is_production ? 'https://app.midtrans.com/snap/v1' : 'https://app.sandbox.midtrans.com/snap/v1'
  }

  createTransaction(
    transaction_details: TransactionDetail,
    item_details?: ItemDetail[],
    customer_details?: CustomerDetail,
    credit_card?: CreditCard,
  ): Promise<MTCreateTransResp> {
    return new Promise((resolve, reject) => {
      axios.post(`${this.base_url}/transactions`, {
        transaction_details,
        item_details,
        customer_details,
        credit_card,
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${env.get('MIDTRANS_SERVER_KEY').required().asString()}:`).toString('base64')}`,
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}

const MidTransInstance = new MidTrans(env.get('NODE_ENV').required().asString() === 'production')

export default MidTransInstance