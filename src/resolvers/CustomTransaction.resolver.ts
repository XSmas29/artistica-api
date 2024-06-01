import { CustomTransaction } from '@entity/CustomTransaction'
import { CustomTransactionData } from '@utils/params'
import { Context, ServerResponse } from '@utils/types'
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'

@Resolver(CustomTransaction)
export class CustomTransactionResolver {
  
  @Authorized(['USER'])
  @Mutation(() => ServerResponse)
  async createCustomTransaction(
    @Arg('data') data: CustomTransactionData,
    @Ctx() { auth: { userData } }: Context
  ): Promise<ServerResponse> {

    await CustomTransaction.create({
      user: userData,
    })

    return {
      success: true,
      message: 'Berhasil menambahkan Request Perhiasan kustom',
    }
  }
}