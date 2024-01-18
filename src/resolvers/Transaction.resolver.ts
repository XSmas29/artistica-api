import MidTransInstance from '@utils/api/midtrans.api'
import { CreditCard, CustomerDetail, ItemDetail, MTCreateTransResp, TransactionDetail } from '@utils/transaction.type'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class TransactionResolver {

  @Mutation(() => MTCreateTransResp)
  async addTransactionMT(
    @Arg('transaction_detail') transaction_detail: TransactionDetail,
    @Arg('item_details', () => [ItemDetail], { nullable: true }) item_details?: ItemDetail[],
    @Arg('customer_detail', { nullable: true }) customer_detail?: CustomerDetail,
    @Arg('credit_card', { nullable: true }) credit_card?: CreditCard,
  ): Promise<MTCreateTransResp> {
    console.log('createTransaction')
    const res = await MidTransInstance.createTransaction(
      transaction_detail,
      item_details,
      customer_detail,
      credit_card,
    )

    return res
  }
}