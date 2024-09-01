import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { AddCustomTransactionData, pagination, sort, UpdateCustomTransactionBasicInfoData, UpdateCustomTransactionPurchaseData } from '@utils/params'
import { Context, Roles, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { parse } from 'path'
import { uploadFile } from '@utils/files'
import { Image } from '@entity/Image.entity'
import { Chat } from '@entity/Chat.entity'
import * as env from 'env-var'
import { Loader } from '@ejekanshjain/type-graphql-dataloader'
import { In } from 'typeorm'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'
import { CustomTransactionList, filterCustomTransaction } from '@utils/transaction.type'
import { TransactionStatus } from '@entity/TransactionStatus.entity'

@Resolver(CustomTransaction)
export class CustomTransactionResolver {
  @FieldResolver()
  @Loader<number, Image[]>(async ids => {
    const images = await Image.find({
      where: { custom_transaction: { id: In([...ids]) } },
      relations: ['custom_transaction'],
    })
    const base_url = env.get('BASE_URL').required().asString()
    images.forEach(image => image.path = `${base_url}/custom_transaction/${image.custom_transaction!.id.toString()}/${image.path}`)
    const imagesById = groupBy(images, 'custom_transaction.id')

    return ids.map(id => imagesById[id] ?? [])
  })
  images(@Root() root: CustomTransaction) {
    return (dataloader: DataLoader<string, Image[]>) =>
      dataloader.load(root.id)
  }

  @Authorized<Roles>(['USER'])
  @Mutation(() => ServerResponse)
  async addCustomTransaction( 
    @Arg('data') data: AddCustomTransactionData,
    @Ctx() { auth: { userData } }: Context
  ): Promise<ServerResponse> {
    const { images, ...rest } = data

    const newCustomTransaction = CustomTransaction.create({
      user: userData,
      status: await TransactionStatus.findOneByOrFail({ id: 210 }),
      ...rest,
    })

    const customTransactionData = await CustomTransaction.save(newCustomTransaction)

    const newChat = Chat.create({
      custom_transaction: customTransactionData,
      title: `${rest.product_name}`,
    })

    const chatData = await Chat.save(newChat)

    customTransactionData.chat = chatData
    customTransactionData.save()

    images.forEach(async image => {
      const data = await image
      const { ext } = parse(data.filename)
      const path = `img_${customTransactionData.id}_${Date.now().toString()}${ext}`

      await uploadFile(image, `custom_transaction/${customTransactionData.id}`, path)
      
      const newImage = Image.create({
        path: path,
        custom_transaction: customTransactionData,
      })

      await Image.save(newImage)
    })

    return {
      success: true,
      message: 'Berhasil menambahkan Request Perhiasan kustom',
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse)
  async removeCustomTransaction(
    @Arg('id') id: string,
  ): Promise<ServerResponse> {
    const customTransaction = await CustomTransaction.findOneByOrFail({ id: id })

    await CustomTransaction.delete(customTransaction.id)

    return {
      success: true,
      message: 'Berhasil menghapus Request Perhiasan kustom',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async updateCustomTransactionBasicInfo(
    @Arg('id') id: string,
    @Arg('data') data: UpdateCustomTransactionBasicInfoData,
  ): Promise<ServerResponse> {
    const customTransaction = await CustomTransaction.findOneByOrFail({ id: id })

    await CustomTransaction.update(customTransaction.id, {
      ...data,
    })

    return {
      success: true,
      message: 'Berhasil mengubah data Request Perhiasan kustom',
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse)
  async updateCustomTransactionPurchaseInfo(
    @Arg('id') id: string,
    @Arg('data') data: UpdateCustomTransactionPurchaseData,
  ): Promise<ServerResponse> {
    const customTransaction = await CustomTransaction.findOneByOrFail({ id: id })
    await CustomTransaction.update(customTransaction.id, {
      ...data,
    })

    return {
      success: true,
      message: 'Berhasil mengubah data Request Perhiasan kustom',
    }
  }

  @Authorized<Roles>(['USER','ADMIN'])
  @Query(() => CustomTransaction)
  async customTransactionDetail(
    @Arg('id') id: string,
  ): Promise<CustomTransaction> {
    return CustomTransaction.findOneByOrFail({ id: id })
  }
  
  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async sendCustomOrder(
    @Arg('transaction_id') transaction_id: string,
    @Arg('resi_number') resi_number: string,
  ): Promise<ServerResponse> {
    const transaction = await CustomTransaction.findOneByOrFail({ id: transaction_id })

    transaction.resi_number = resi_number
    transaction.status = await TransactionStatus.findOneByOrFail({ id: 230 })

    await transaction.save()

    return {
      success: true,
      message: 'Berhasil mengirimkan pesanan',
    }
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Mutation(() => ServerResponse)
  async updateCustomTransactionStatus(
    @Arg('transaction_id') transaction_id: string,
    @Arg('status_id') status_id: number,
  ): Promise<ServerResponse> {
    const transaction = await CustomTransaction.findOneByOrFail({ id: transaction_id })
    let status = await TransactionStatus.findOneByOrFail({ id: status_id })
    if (status_id === 240) {
      //check if 1 month has passed since the purchase date

      const currentDate = new Date()
      const purchaseDate = transaction.purchase_date!
      const diffTime = Math.abs(currentDate.getTime() - purchaseDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays > 30) status = await TransactionStatus.findOneByOrFail({ id: 270 })
    }


    transaction.status = status
    await transaction.save()
    

    return {
      success: true,
      message: 'Berhasil mengubah status transaksi',
    }
  }

  @Authorized<Roles>(['ADMIN', 'USER'])
  @Query(() => CustomTransactionList)
  async customTransactions(
    @Arg('filter') filter: filterCustomTransaction,
    @Arg('sort') sort: sort,
    @Arg('pagination') pagination: pagination,
    @Ctx() { auth: { userData } }: Context,
  ): Promise<CustomTransactionList> {
    const transactions = CustomTransaction.createQueryBuilder('ctrans')

    filter.status_ids && filter.status_ids.length > 0 && transactions.where('ctrans.status in (:statuses)', { statuses: filter.status_ids })
    userData.is_admin === false && transactions.andWhere('ctrans.user = :user_id', { user_id: userData.id })

    transactions.orderBy(`ctrans.${sort.field}`, sort.sort)
      .limit(pagination.limit)
      .offset((pagination.page - 1) * pagination.limit)
      .getManyAndCount()

    const result = await transactions.getManyAndCount()

    return {
      count: result[1],
      custom_transactions: result[0],
    }
  }
}