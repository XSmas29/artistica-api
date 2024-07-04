import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { AddCustomTransactionData, UpdateCustomTransactionData } from '@utils/params'
import { Context, Roles, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { parse } from 'path'
import { uploadFile } from '@utils/files'
import { Image } from '@entity/Image.entity'
import { Chat } from '@entity/Chat.entity'
import * as env from 'env-var'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { In } from 'typeorm'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'

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
    return (dataloader: DataLoader<number, Image[]>) =>
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

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async updateCustomTransactionBasicInfo(
    @Arg('id') id: number,
    @Arg('data') data: UpdateCustomTransactionData,
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
    @Arg('id') id: number,
  ): Promise<CustomTransaction> {
    return CustomTransaction.findOneByOrFail({ id: id })
  }
}