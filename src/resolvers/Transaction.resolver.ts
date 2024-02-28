import MidTransInstance from '@utils/api/midtrans.api'
import { CreditCardMT, CustomerDetailMT, ItemDetailMT, MTCreateTransResp, TransactionDetailMT } from '@utils/transaction.type'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class TransactionResolver {

  @Mutation(() => MTCreateTransResp)
  async addTransactionMT(
    @Arg('transaction_detail') transaction_detail: TransactionDetailMT,
    @Arg('item_details', () => [ItemDetailMT], { nullable: true }) item_details?: ItemDetailMT[],
    @Arg('customer_detail', { nullable: true }) customer_detail?: CustomerDetailMT,
    @Arg('credit_card', { nullable: true }) credit_card?: CreditCardMT,
  ): Promise<MTCreateTransResp> {
    console.log(transaction_detail,
      item_details,
      customer_detail,
      credit_card,)
    const res = await MidTransInstance.createTransaction(
      transaction_detail,
      item_details,
      customer_detail,
      credit_card,
    )

    return res
  }
}