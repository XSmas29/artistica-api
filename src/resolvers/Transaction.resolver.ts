import { CourseTransaction } from '@entity/CourseTransaction.entity'
import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { Image } from '@entity/Image.entity'
import { Product } from '@entity/Product.entity'
import { TransactionDetail } from '@entity/TransactionDetail.entity'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
import { Variant } from '@entity/Variant.entity'
import MidTransInstance from '@utils/api/midtrans.api'
import { pagination, sort } from '@utils/params'
import { CreditCardMT, CustomerDetailMT, IncomeReportData, ItemDetailMT, MTCreateTransResp, TransactionData, TransactionDetailMT, TransactionHistoryHeader, TransactionItemData, TransactionList, filterTransaction } from '@utils/transaction.type'
import { Context, Roles, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import * as env from 'env-var'
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
    // checkProductStock
    let stockCheck = true
    item_details?.forEach(async item => {
      if (Number.isInteger(item.id)) {
        const variant = await Variant.findOneByOrFail({ id: +item.id })
        if (variant.stock < item.quantity) {
          stockCheck = false
        }
      }
    })

    if (!stockCheck) {
      return {
        success: false,
      }
    }
    else {
      const res = await MidTransInstance.createTransaction(
        transaction_detail,
        item_details,
        customer_detail,
        credit_card,
      )
  
      return {
        ...res,
        success: true,
      }
    }
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

      const variant = await Variant.findOneByOrFail({ id: item.variant_id })
      variant.stock -= item.quantity
      await variant.save()
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
  async transactionStatuses(
    @Arg('category') category: number,
  ): Promise<TransactionStatus[]> {
    const res = TransactionStatus.createQueryBuilder('status')
      .where('status.category = :category', { category })
      .getMany()

    return res
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
      .andWhere("header.status != :status", { status: 110 })
    filter.status_ids && filter.status_ids.length > 0 && transactions.andWhere('header.status in (:statuses)', { statuses: filter.status_ids })
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
  @Query(() => TransactionHistoryHeader)
  async transactionDetail(
    @Arg('transaction_id') transaction_id: string,
  ): Promise<TransactionHistoryHeader> {
    const base_url = env.get('BASE_URL').required().asString()
    const header = await TransactionHeader.createQueryBuilder('header')
    .withDeleted()
      .andWhere('header.id = :transaction_id', { transaction_id })
      .leftJoinAndSelect('header.details', 'details')
      .leftJoinAndSelect('details.variant', 'variant')
      .leftJoinAndSelect('header.status', 'status')
      .leftJoinAndSelect('header.user', 'user')
      .getOneOrFail()

    const mapping = header.details.map(async detail => {
      detail.variant = await Variant.createQueryBuilder('variant')
        .withDeleted()
        .where('variant.id = :variant_id', { variant_id: detail.variant.id })
        .getOneOrFail()

      detail.variant.product = await Product.createQueryBuilder('prod')
      .withDeleted()
      .leftJoinAndSelect('prod.variants', 'variants')
      .leftJoinAndSelect('variants.image', 'image')
      .where('variants.id = :variant_id', { variant_id: detail.variant.id })
      .getOneOrFail()

      detail.variant.product.images = await Image.createQueryBuilder('img')
      .withDeleted()
      .leftJoinAndSelect('img.product', 'product')
      .where('product.id = :product_id', { product_id: detail.variant.product.id })
      .getMany()

      detail.variant.image = await Image.createQueryBuilder('img')
      .withDeleted()
      .leftJoinAndSelect('img.variant', 'variant')
      .where('variant.id = :variant_id', { variant_id: detail.variant.id })
      .getOne()

      if (detail.variant.image) {
        detail.variant.image.path = `${base_url}/variants/${detail.variant.id.toString()}/${detail.variant.image.path}`
      }
      detail.variant.product.images.forEach(image => {
        image.path = `${base_url}/products/${detail.variant.product.id.toString()}/${image.path}`
      })

      return detail
    })

    const res = await Promise.all(mapping)

    header.details = res

    const ret = header as TransactionHistoryHeader

    return ret

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

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async sendOrder(
    @Arg('transaction_id') transaction_id: string,
    @Arg('resi_number') resi_number: string,
  ): Promise<ServerResponse> {
    const header = await TransactionHeader.findOneByOrFail({ id: transaction_id })

    header.resi_number = resi_number
    header.status = await TransactionStatus.findOneByOrFail({ id: 130 })

    await header.save()

    return {
      success: true,
      message: 'Berhasil mengirimkan pesanan',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Query(() => IncomeReportData)
  async incomeReport(
    @Arg('period_month') period_month: number,
  ): Promise<IncomeReportData> {

    let current_month = new Date().getMonth() + 1
    let current_year = new Date().getFullYear()

    const ret: IncomeReportData = {
      transaction_income: [],
      custom_income: [],
      course_income: [],
      total_income: [],
      time_label: [],
    }

    const formatter = Intl.DateTimeFormat('id-ID', {
      month: 'short',
      year: 'numeric',
    })
    
    for(period_month; period_month > 0; period_month--) {
      let total_income = 0
      const transaction_income = await TransactionHeader.createQueryBuilder('header')
      .select('SUM(header.total_price)', 'total')
      .where('MONTH(header.purchase_date) = :month', { month: current_month })
      .andWhere('YEAR(header.purchase_date) = :year', { year: current_year })
      .getRawOne()

      const custom_income = await CustomTransaction.createQueryBuilder('cst')
      .select('SUM(cst.total_price)', 'total')
      .where('MONTH(cst.purchase_date) = :month', { month: current_month })
      .andWhere('YEAR(cst.purchase_date) = :year', { year: current_year })
      .getRawOne()

      const course_income = await CourseTransaction.createQueryBuilder('ct')
      .select('SUM(ct.total_price)', 'total')
      .where('MONTH(ct.purchase_date) = :month', { month: current_month })
      .andWhere('YEAR(ct.purchase_date) = :year', { year: current_year })
      .getRawOne()
      
      total_income = +transaction_income.total + +custom_income.total + +course_income.total

      ret.total_income.unshift(total_income)
      ret.transaction_income.unshift(+transaction_income.total)
      ret.custom_income.unshift(+custom_income.total)
      ret.course_income.unshift(+course_income.total)
      const date = new Date(current_year, current_month - 1)
      ret.time_label.unshift(formatter.format(date))

      if (current_month - 1 <= 0) {
        current_month = 12
        current_year -= 1
      } else {
        current_month -= 1
      }
    }
    return ret
  }
}