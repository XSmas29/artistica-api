import { Complaint } from "@entity/Complaint.entity";
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Resolver, Root } from "type-graphql";
import * as env from 'env-var'
import { Roles, ServerResponse } from "@utils/types";
import { ComplaintData } from "@utils/complaint.type";
import { parse } from "path";
import { uploadFile } from "@utils/files";
import { CustomTransaction } from "@entity/CustomTransaction.entity";
import { ComplaintType } from "@entity/ComplaintType.entity";

@Resolver(Complaint)
export class ChatMessageResolver {
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
    
    let path = ''

    const imageData = await complaint_data.image
    if (imageData) {
      const { ext } = parse(imageData.filename)
      path = `img_${complaint_data.custom_transaction_id}_${Date.now().toString()}${ext}`
  
      await uploadFile(imageData, `complaint/${complaint_data.custom_transaction_id}`, path)
    }

    await Complaint.create({
      custom_transaction: await CustomTransaction.findOneByOrFail({id: complaint_data.custom_transaction_id}),
      type: await ComplaintType.findOneByOrFail({id: complaint_data.type_id}),
      description: complaint_data.description,
      image: imageData ? path : undefined,
    }).save()

    return {
      success: true,
      message: 'Berhasil mengajukan keluhan',
    }
  }
}