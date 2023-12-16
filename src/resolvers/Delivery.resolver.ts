import { DeliveryProvider } from '@entity/DeliveryProvider.entity'
import RJInstance from '@utils/api/rajaongkir.api'
import { DeliveryService, ParamDeliveryService } from '@utils/delivery.type'
import { City, Province } from '@utils/types'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class DeliveryResolver {
  @Query(() => [Province])
  async provinces(): Promise<Province[]> {
    return await RJInstance.getProvinces()
  }

  @Query(() => [City])
  async cities(
    @Arg('provinceId') provinceId: number
  ): Promise<City[]> {
    return await RJInstance.getCities(provinceId)
  }

  @Query(() => [DeliveryProvider])
  async deliveryProviders(): Promise<DeliveryProvider[]> {
    return await DeliveryProvider.find()
  }

  @Query(() => [DeliveryService])
  async deliveryServices(
    @Arg('param') param: ParamDeliveryService,
  ): Promise<DeliveryService[]> {
    const services = await RJInstance.getCost(
      param.origin,
      param.destination,
      param.weight,
      param.courier
    )
    
    return services
  }
}
