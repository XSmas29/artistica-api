import { Course } from "@entity/Course.entity";
import { CourseTransaction } from "@entity/CourseTransaction.entity";
import { TransactionStatus } from "@entity/TransactionStatus.entity";
import { pagination, sort } from "@utils/params";
import { CourseTransactionData, CourseTransactionItemData, CourseTransactionList } from "@utils/transaction.type";
import { Context, Roles, ServerResponse } from "@utils/types";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver(CourseTransaction)
export class CourseTransactionResolver {
  @Authorized<Roles>(['USER'])
  @Mutation(() => ServerResponse)
  async addCourseTransaction(
    @Arg('transaction_data') transaction_data: CourseTransactionData,
    @Arg('item_data', () => CourseTransactionItemData) item_data: CourseTransactionItemData,
    @Ctx() { auth: { userData } }: Context,
  ): Promise<ServerResponse> {
    await CourseTransaction.create({
      id: transaction_data.transaction_id,
      user: userData,
      course: await Course.findOneByOrFail({ id: item_data.course_id }),
      price: item_data.price,
      amount: item_data.quantity,
      total_price: item_data.price * item_data.quantity,
      status: await TransactionStatus.findOneByOrFail({ id: 310 }),
      start_date: transaction_data.start_date,
      time_slot: transaction_data.time_slot,
    }).save()

    return {
      success: true,
      message: 'Berhasil menyimpan transaksi',
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => CourseTransactionList)
  async courseTransactions(
    @Arg('sort') sort: sort,
    @Arg('pagination') pagination: pagination,
    @Ctx() { auth: { userData } }: Context
  ): Promise<CourseTransactionList> {
    const courseTransactions = CourseTransaction.createQueryBuilder('crt')

    if (!userData.is_admin) {
      courseTransactions.where('course_transaction.user = :user', { user: userData.id })
    }
    courseTransactions.andWhere('crt.status = :status', { status: 320 })

    courseTransactions.orderBy(`.${sort.field}`, sort.sort)
      .limit(pagination.limit)
      .offset((pagination.page - 1) * pagination.limit)
      .getManyAndCount()

    const courseTransactionData = await courseTransactions.getManyAndCount()

    return {
      count: courseTransactionData[1],
      course_transactions: courseTransactionData[0],
    }
  }

  @Authorized<Roles>(['USER','ADMIN'])
  @Query(() => CourseTransaction)
  async courseTransactionDetail(
    @Arg('id') id: string,
  ): Promise<CourseTransaction> {
    return CourseTransaction.findOneByOrFail({ id: id })
  }
}