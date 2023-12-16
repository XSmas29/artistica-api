import { City, Province } from '@utils/types'
import * as env from 'env-var'
import  dotenv from 'dotenv'
import axios from 'axios'
import { CourierOption, DeliveryService, RajaOngkirTier } from '@utils/delivery.type'
dotenv.config()

class RajaOngkir {
  api_key: string
  tier: RajaOngkirTier

  constructor(key: string, tier: RajaOngkirTier) {
    this.api_key = key
    this.tier = tier
  }

  getProvinces(): Promise<Province[]> {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.rajaongkir.com/${this.tier}/province`, {
        headers: {
          'key': this.api_key
        }
      })
      .then(response => {
        resolve(response.data.rajaongkir.results)
      })
      .catch(error => {
        reject(error)
      })
    })
  }

  getCities(provinceId: number): Promise<City[]> {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.rajaongkir.com/${this.tier}/city?province=${provinceId}`, {
        headers: {
          'key': this.api_key
        }
      })
      .then(response => {
        resolve(response.data.rajaongkir.results)
      })
      .catch(error => {
        reject(error)
      })
    })
  }

  getCost(origin: string, destination: string, weight: string, courier: CourierOption): Promise<DeliveryService[]> {
    console.log(origin, destination, weight, courier)
    
    return new Promise((resolve, reject) => {
      axios.post(`https://api.rajaongkir.com/${this.tier}/cost`, {
        origin,
        destination,
        weight,
        courier
      }, {
        headers: {
          'key': this.api_key,
          'content-type': 'application/x-www-form-urlencoded'
        },
      })
      .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const results = response.data.rajaongkir.results[0].costs.map((cost: any) => {
          return {
            service: cost.service,
            description: cost.description,
            cost: cost.cost[0].value,
            etd: cost.cost[0].etd,
            note: cost.cost[0].note
          }
        })
        resolve(results)
      })
      .catch((error: unknown) => {
        reject(error)
      })
    })
  }
}

const RJInstance = new RajaOngkir(
  env.get('RAJAONGKIR_API_KEY').required().asString(), 
  env.get('RAJAONGKIR_TIER').required().asString() as RajaOngkirTier
)

export default RJInstance