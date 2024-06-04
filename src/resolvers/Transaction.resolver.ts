import { TransactionDetail } from '@entity/TransactionDetail.entity'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Variant } from '@entity/Variant.entity'
import MidTransInstance from '@utils/api/midtrans.api'
import { CreditCardMT, CustomerDetailMT, ItemDetailMT, MTCreateTransResp, TransactionData, TransactionDetailMT, TransactionItemData } from '@utils/transaction.type'
import { Context, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class TransactionResolver {

  @Authorized<Roles>(['USER'])
  @Mutation(() => MTCreateTransResp)
  async addTransactionMT(
    @Arg('transaction_detail') transaction_detail: TransactionDetailMT,
    @Arg('item_details', () => [ItemDetailMT], { nullable: true }) item_details?: ItemDetailMT[],
    @Arg('customer_detail', { nullable: true }) customer_detail?: CustomerDetailMT,
    @Arg('credit_card', { nullable: true }) credit_card?: CreditCardMT,
  ): Promise<MTCreateTransResp> {
    const res = await MidTransInstance.createTransaction(
      transaction_detail,
      item_details,
      customer_detail,
      credit_card,
    )

    return res
  }

  @Authorized<Roles>(['USER'])
  @Mutation(() => ServerResponse)
  async addTransaction(
    @Arg('transaction_data') transaction_data: TransactionData,
    @Arg('item_data', () => [TransactionItemData]) item_data: TransactionItemData[],
    @Ctx() { auth: { userData } }: Context,
  ): Promise<ServerResponse> {

    const header = await TransactionHeader.create({
      id: transaction_data.transaction_id,
      user: userData,
      total_price: transaction_data.total_price,
      shipping_cost: transaction_data.shipping_cost,
      shipping_service: transaction_data.shipping_service,
      shipping_address: transaction_data.shipping_address,
      shipping_city: transaction_data.shipping_city,
      shipping_postal_code: transaction_data.shipping_postal_code,
      customer_phone: transaction_data.customer_phone,
      customer_name: transaction_data.customer_name,
      customer_email: transaction_data.customer_email,
      status: await TransactionStatus.findOneByOrFail({ id: 1 }),
    }).save()

    item_data.forEach(async item => {
      await TransactionDetail.create({
        header,
        variant: await Variant.findOneByOrFail({ id: item.variant_id }),
        price: item.price,
        quantity: item.quantity,
      }).save()
    })

    return {
      success: true,
      message: 'Berhasil menyimpan transaksi',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Query(() => [TransactionStatus])
  async transactionStatuses(): Promise<TransactionStatus[]> {
    return TransactionStatus.find()
  }
}