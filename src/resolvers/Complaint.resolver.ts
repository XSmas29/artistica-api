import { Complaint } from "@entity/Complaint.entity";
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import * as env from 'env-var'
import { Roles, ServerResponse } from "@utils/types";
import { ComplaintData, ComplaintList, filterComplaints } from "@utils/complaint.type";
import { parse } from "path";
import { uploadFile } from "@utils/files";
import { CustomTransaction } from "@entity/CustomTransaction.entity";
import { ComplaintType } from "@entity/ComplaintType.entity";
import { TransactionStatus } from "@entity/TransactionStatus.entity";
import { pagination, sort } from "@utils/params";
import { Brackets } from "typeorm";

@Resolver(Complaint)
export class ComplaintResolver {
  @FieldResolver(() => String)
  async image(@Root() complaint: Complaint) {
    const data = await Complaint.createQueryBuilder('cmt')
      .where('cmt.id = :complaintId', { complaintId: complaint.id })
      .getOneOrFail()
    const base_url = env.get('BASE_URL').required().asString()
    
    return complaint.image ? `${base_url}/complaint/${data.id.toString()}/${complaint.image}` : null
  }

  @Authorized<Roles>(['USER'])
  @Mutation(() => ServerResponse)
  async addComplaint(
    @Arg('data') complaint_data: ComplaintData,
  ): Promise<ServerResponse> {
    
    // let path = ''

    // const imageData = await complaint_data.image
    // if (imageData) {
    //   const { ext } = parse(imageData.filename)
    //   path = `img_${complaint_data.custom_transaction_id}_${Date.now().toString()}${ext}`
  
    //   await uploadFile(imageData, `complaint/${complaint_data.}`, path)
    // }

    const complaintData = await Complaint.create({
      custom_transaction: await CustomTransaction.findOneByOrFail({id: complaint_data.custom_transaction_id}),
      type: await ComplaintType.findOneByOrFail({id: complaint_data.type_id}),
      description: complaint_data.description,
    }).save()

    //change custom transaction status
    const customTransaction = await CustomTransaction.findOneByOrFail({id: complaint_data.custom_transaction_id})
    if (complaint_data.type_id === 1) {
      customTransaction.status = await TransactionStatus.findOneByOrFail({id: 251})
    } else if (complaint_data.type_id === 2) {
      customTransaction.status = await TransactionStatus.findOneByOrFail({id: 252})
    }
    await customTransaction.save()

    if (complaint_data.image) {
      const imageData = await complaint_data.image
      const { ext } = parse(imageData.filename)
      const path = `img_${complaint_data.custom_transaction_id}_${Date.now().toString()}${ext}`

      await uploadFile(imageData, `complaint/${complaintData.id}`, path)
      complaintData.image = path
      complaintData.save()
    }

    return {
      success: true,
      message: 'Berhasil mengajukan keluhan',
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => [ComplaintType])
  async complaintTypes(): Promise<ComplaintType[]> {
    const res = await ComplaintType.find()

    return res
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => ComplaintList)
  async complaints(
    @Arg('custom_transaction_id', {nullable: true}) custom_transaction_id?: string,
    @Arg('filter', {nullable: true}) filter?: filterComplaints,
    @Arg('sort', {nullable: true}) sort?: sort,
    @Arg('pagination', {nullable: true}) pagination?: pagination,
  ): Promise<ComplaintList> {
    console.log(filter)
    const complaint = Complaint.createQueryBuilder('cmt')
    custom_transaction_id && complaint.andWhere('cmt.custom_transaction = :custom_transaction_id', { custom_transaction_id })
    filter?.is_approved_values && filter.is_approved_values.length > 0 && complaint.andWhere(new Brackets((qb) => {
      qb.orWhere('cmt.is_approved in (:is_approved)', { is_approved: filter.is_approved_values })
      filter?.is_approved_values?.includes(null) && qb.orWhere('cmt.is_approved is NULL')
    }))
    filter?.type_ids && filter.type_ids.length > 0 && complaint.andWhere('cmt.type in (:type)', { type: filter.type_ids })
    console.log(complaint.getQueryAndParameters())

    sort && complaint.orderBy(`${sort.field}`, sort.sort)

    pagination && complaint.limit(pagination.limit)
      .offset((pagination.page - 1) * pagination.limit)
    

    const res = await complaint.getManyAndCount()

    return {
      count: res[1],
      complaints: res[0],
    }
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Query(() => Complaint)
  async complaintDetail(
    @Arg('id') id: number,
  ): Promise<Complaint> {
    const complaint = await Complaint.findOneByOrFail({ id })

    return complaint
  }

  @Authorized<Roles>(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse)
  async updateComplaintApproval(
    @Arg('id') id: number,
    @Arg('is_approved') is_approved: boolean,
  ): Promise<ServerResponse> {
    const complaint = await Complaint.createQueryBuilder('cmt')
      .where('cmt.id = :id', { id })
      .leftJoinAndSelect('cmt.custom_transaction', 'custom_transaction')
      .leftJoinAndSelect('cmt.type', 'type')
      .getOneOrFail()

    complaint.is_approved = is_approved
    await complaint.save()
    
    //update status custom transaction
    const customTransaction = await CustomTransaction.findOneByOrFail({id: complaint.custom_transaction.id})
    console.log(customTransaction)
    if (is_approved === false) customTransaction.status = await TransactionStatus.findOneByOrFail({id: 240})
    else if (is_approved === true) {
      if (complaint.type.id === 1) customTransaction.status = await TransactionStatus.findOneByOrFail({id: 261})
      else if (complaint.type.id === 2) customTransaction.status = await TransactionStatus.findOneByOrFail({id: 262})
    }

    await customTransaction.save()

    return {
      success: true,
      message: 'Berhasil mengubah status komplain',
    }
  }
}