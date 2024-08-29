import { TransactionDetail } from '@entity/TransactionDetail.entity'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Variant } from '@entity/Variant.entity'
import MidTransInstance from '@utils/api/midtrans.api'
import { pagination, sort } from '@utils/params'
import { CreditCardMT, CustomerDetailMT, ItemDetailMT, MTCreateTransResp, TransactionData, TransactionDetailMT, TransactionItemData, TransactionList, filterTransaction } from '@utils/transaction.type'
import { Context, Roles, ServerResponse } from '@utils/types'
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
      status: await TransactionStatus.findOneByOrFail({ id: 110 }),
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

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse)
  async removeTransaction(
    @Arg('transaction_id') transaction_id: string,
  ): Promise<ServerResponse> {
    const transactionDetails = await TransactionDetail.createQueryBuilder('td')
      .leftJoinAndSelect('td.variant', 'variant')
      .where('td.header = :transaction_id', { transaction_id })
      .getMany()

    transactionDetails.map(async (detail) => {
      const variant = await Variant.findOneByOrFail({ id: detail.variant.id });
      variant.stock += detail.quantity;
      await variant.save();
    })

    await TransactionDetail.remove(transactionDetails)

    await TransactionHeader.delete({ id: transaction_id })

    return {
      success: true,
      message: 'Berhasil menghapus transaksi',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Query(() => [TransactionStatus])
  async transactionStatuses(): Promise<TransactionStatus[]> {
    return TransactionStatus.find()
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Query(() => TransactionList)
  async transactions(
    @Arg('filter') filter: filterTransaction,
    @Arg('sort') sort: sort,
    @Arg('pagination') pagination: pagination,
    @Ctx() { auth: { userData } }: Context,
  ): Promise<TransactionList> {
    const transactions = TransactionHeader.createQueryBuilder('header')

    filter.status_ids && filter.status_ids.length > 0 && transactions.where('header.status in (:statuses)', { statuses: filter.status_ids })
    userData.is_admin === false && transactions.andWhere('header.user = :user_id', { user_id: userData.id })

    transactions.orderBy(`header.${sort.field}`, sort.sort)
      .limit(pagination.limit)
      .offset((pagination.page - 1) * pagination.limit)
      .getManyAndCount()

    const result = await transactions.getManyAndCount()

    return {
      count: result[1],
      transactions: result[0],
    }
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Query(() => TransactionHeader)
  async transactionDetail(
    @Arg('transaction_id') transaction_id: string,
  ): Promise<TransactionHeader> {
    return TransactionHeader.findOneByOrFail({ id: transaction_id })
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Mutation(() => ServerResponse)
  async updateTransactionStatus(
    @Arg('transaction_id') transaction_id: string,
    @Arg('status_id') status_id: number,
  ): Promise<ServerResponse> {
    const header = await TransactionHeader.findOneByOrFail({ id: transaction_id })
    const status = await TransactionStatus.findOneByOrFail({ id: status_id })

    header.status = status
    await header.save()

    return {
      success: true,
      message: 'Berhasil mengubah status transaksi',
    }
  }
}