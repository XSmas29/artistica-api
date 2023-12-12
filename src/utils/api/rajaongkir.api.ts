import { City, Province } from '@utils/types'
import * as env from 'env-var'
import  dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

class RajaOngkir {
  api_key: string

  constructor(key: string) {
    this.api_key = key
  }

  getProvinces(): Promise<Province[]> {
    return new Promise((resolve, reject) => {
      axios.get('https://api.rajaongkir.com/starter/province', {
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
      axios.get(`https://api.rajaongkir.com/starter/city?province=${provinceId}`, {
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

  getCost(origin: string, destination: string, weight: string, courier: string) {
    return new Promise((resolve, reject) => {
      axios.get('https://api.rajaongkir.com/starter/cost', {
        headers: {
          'key': this.api_key
        },
        params: {
          origin,
          destination,
          weight,
          courier
        }
      })
      .then(response => {
        resolve(response.data.rajaongkir.results[0].costs)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}

const RJInstance = new RajaOngkir(env.get('RAJAONGKIR_API_KEY').required().asString())

export default RJInstance