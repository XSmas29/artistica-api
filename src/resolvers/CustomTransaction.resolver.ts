import { CustomTransaction } from '@entity/CustomTransaction'
import { AddCustomTransactionData } from '@utils/params'
import { Context, Roles, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'
import { parse } from 'path'
import { uploadFile } from '@utils/files'
import { Image } from '@entity/Image.entity'
import { Chat } from '@entity/Chat.entity'

@Resolver(CustomTransaction)
export class CustomTransactionResolver {
  
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
}