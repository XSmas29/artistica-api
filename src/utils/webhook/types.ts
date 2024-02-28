export type MidtransStatusNotification = {
  transaction_time: Date,
  transaction_status: string,
  transaction_id: string,
  status_message: string,
  status_code: string,
  signature_key: string,
  settlement_time: Date,
  payment_type: string,
  payment_amounts: unknown[],
  order_id: string,
  merchant_id: string,
  gross_amount: number,
  fraud_status: string,
  expiry_time: Date,
  currency: string
}