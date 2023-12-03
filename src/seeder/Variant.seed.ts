import { Product } from '@entity/Product.entity'
import { Variant } from '@entity/Variant.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class VariantSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Variant[] = [
      {
        id: 1,
        name: 'Single variant',
        price: 90000,
        sku: 'S16771244441',
        stock: 268,
        product: await Product.findOneOrFail({ where: { id: 1 } }) 
      },
      {
        id: 2,
        name: 'Single variant',
        price: 90000,
        sku: 'S16771243091',
        stock: 267,
        product: await Product.findOneOrFail({ where: { id: 2 } }) 
      },
      {
        id: 3,
        name: 'Single variant',
        price: 90000,
        sku: 'S16771239631',
        stock: 269,
        product: await Product.findOneOrFail({ where: { id: 3 } }) 
      },
      {
        id: 4,
        name: 'Single variant',
        price: 90000,
        sku: 'S16771230341',
        stock: 270,
        product: await Product.findOneOrFail({ where: { id: 4 } }) 
      },
      {
        id: 5,
        name: 'Single variant',
        price: 125000,
        sku: 'S16771216551',
        stock: 300,
        product: await Product.findOneOrFail({ where: { id: 5 } }) 
      },
      {
        id: 6,
        name: 'Single variant',
        price: 125000,
        sku: 'S16771209411',
        stock: 300,
        product: await Product.findOneOrFail({ where: { id: 6 } }) 
      },
      {
        id: 7,
        name: 'Single variant',
        price: 125000,
        sku: 'S16771206661',
        stock: 30,
        product: await Product.findOneOrFail({ where: { id: 7 } }) 
      },
      {
        id: 8,
        name: 'Single variant',
        price: 125000,
        sku: 'S16771201141',
        stock: 50,
        product: await Product.findOneOrFail({ where: { id: 8 } }) 
      },
      {
        id: 9,
        name: 'Single variant',
        price: 60000,
        sku: 'S16752381461',
        stock: 50,
        product: await Product.findOneOrFail({ where: { id: 9 } }) 
      },
      {
        id: 10,
        name: 'Single variant',
        price: 60000,
        sku: 'S16752371321',
        stock: 30,
        product: await Product.findOneOrFail({ where: { id: 10 } })
      },
      {
        id: 11,
        name: 'Gold',
        price: 60000,
        sku: 'S16752274721',
        stock: 50,
        product: await Product.findOneOrFail({ where: { id: 11 } })
      },
      {
        id: 12,
        name: 'Single variant',
        price: 60000,
        sku: 'S16751494281',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 12 } })
      },
      {
        id: 13,
        name: 'Gold',
        price: 100000,
        sku: 'S16740349561',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 13 } })
      },
      {
        id: 14,
        name: 'Black',
        price: 100000,
        sku: 'S16740348461',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 14 } })
      },
      {
        id: 15,
        name: 'Single variant',
        price: 90000,
        sku: 'S16740346211',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 15 } })
      },
      {
        id: 16,
        name: 'Single variant',
        price: 160000,
        sku: 'S16740345411',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 16 } })
      },
      {
        id: 17,
        name: 'Gold',
        price: 95000,
        sku: 'S16740340911',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 17 } })
      },
      {
        id: 18,
        name: 'Rose',
        price: 95000,
        sku: 'S16740340912',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 17 } })
      },
      {
        id: 19,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740334911',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 18 } })
      },
      {
        id: 20,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740332651',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 19 } })
      },
      {
        id: 21,
        name: 'Gold',
        price: 95000,
        sku: 'S16740248011',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 20 } })
      },
      {
        id: 22,
        name: 'Silver',
        price: 95000,
        sku: 'S16740251151',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 20 } })
      },
      {
        id: 23,
        name: 'Black',
        price: 95000,
        sku: 'S16740077501',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 21 } })
      },
      {
        id: 24,
        name: 'White',
        price: 95000,
        sku: 'S16740077502',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 21 } })
      },
      {
        id: 25,
        name: 'Rose',
        price: 95000,
        sku: 'S16739497841',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 22 } })
      },
      {
        id: 26,
        name: 'Gold',
        price: 95000,
        sku: 'S16739497981',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 22 } })
      },
      {
        id: 27,
        name: 'Rose',
        price: 95000,
        sku: 'S16739489421',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 23 } })
      },
      {
        id: 28,
        name: 'Gold',
        price: 65000,
        sku: 'S16739489422',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 23 } })
      },
      {
        id: 29,
        name: 'Silver',
        price: 95000,
        sku: 'S16740112111',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 23 } })
      },
      {
        id: 30,
        name: 'Rose',
        price: 95000,
        sku: 'S16739485541',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 24 } })
      },
      {
        id: 31,
        name: 'Silver',
        price: 95000,
        sku: 'S16739486421',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 24 } })
      },
      {
        id: 32,
        name: 'Gold',
        price: 100000,
        sku: 'S16739432581',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 25 } })
      },
      {
        id: 33,
        name: 'Silver',
        price: 100000,
        sku: 'S16739432582',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 25 } })
      },
      {
        id: 34,
        name: 'Rose',
        price: 100000,
        sku: 'S16739432583',
        stock: 20,
        product: await Product.findOneOrFail({ where: { id: 25 } })
      },
      {
        id: 35,
        name: 'Single variant',
        price: 97000,
        sku: 'S16739396491',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 26 } })
      },
      {
        id: 36,
        name: 'Single variant',
        price: 95000,
        sku: 'S16736035381',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 27 } })
      },
      {
        id: 37,
        name: 'Single variant',
        price: 93000,
        sku: 'S16736031051',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 28 } })
      },
      {
        id: 38,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736028061',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 29 } })
      },
      {
        id: 39,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736007121',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 30 } })
      },
      {
        id: 40,
        name: 'Single variant',
        price: 35000,
        sku: 'S16735177831',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 31 } })
      },
      {
        id: 41,
        name: 'Single variant',
        price: 55000,
        sku: 'S16735174901',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 32 } })
      },
      {
        id: 42,
        name: '01',
        price: 55000,
        sku: 'S16734187601',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 43,
        name: '02',
        price: 55000,
        sku: 'S16734193951',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 44,
        name: '03',
        price: 55000,
        sku: 'S16734193952',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 45,
        name: '04',
        price: 55000,
        sku: 'S16734193953',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 46,
        name: '05',
        price: 55000,
        sku: 'S16734193954',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 47,
        name: '06',
        price: 55000,
        sku: 'S16734193955',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 48,
        name: '07',
        price: 55000,
        sku: 'S16734193956',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 49,
        name: '08',
        price: 55000,
        sku: 'S16734193957',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 50,
        name: '09',
        price: 55000,
        sku: 'S16734193958',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 51,
        name: '10',
        price: 55000,
        sku: 'S16734193959',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 52,
        name: '11',
        price: 55000,
        sku: 'S167341939510',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 53,
        name: '12',
        price: 55000,
        sku: 'S167341939511',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 54,
        name: '13',
        price: 55000,
        sku: 'S167341939512',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 55,
        name: '14',
        price: 55000,
        sku: 'S167341939513',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 56,
        name: '15',
        price: 55000,
        sku: 'S167341939514',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 57,
        name: '16',
        price: 55000,
        sku: 'S167341939515',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 33 } })
      },
      {
        id: 58,
        name: 'Single variant',
        price: 350000,
        sku: 'S16734894931',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 34 } })
      },
      {
        id: 59,
        name: 'Single variant',
        price: 150000,
        sku: 'S16734884321',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 35 } })
      },
      {
        id: 60,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733313781',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 36 } })
      },
      {
        id: 61,
        name: 'Single variant',
        price: 400000,
        sku: 'S16733308011',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 37 } })
      },
      {
        id: 62,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733305781',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 38 } })
      },
      {
        id: 63,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733303231',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 39 } })
      },
      {
        id: 64,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733300391',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 40 } })
      },
      {
        id: 65,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733296911',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 41 } })
      },
      {
        id: 66,
        name: 'Single variant',
        price: 250000,
        sku: 'S16733234121',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 42 } })
      },
      {
        id: 67,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733225401',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 43 } })
      },
      {
        id: 68,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733224221',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 44 } })
      },
      {
        id: 69,
        name: 'Single variant',
        price: 350000,
        sku: 'S16733221531',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 45 } })
      },
      {
        id: 70,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733215941',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 46 } })
      },
      {
        id: 71,
        name: 'Single variant',
        price: 165000,
        sku: 'S16733214321',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 47 } })
      },
      {
        id: 72,
        name: 'Single variant',
        price: 235000,
        sku: 'S16733212661',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 48 } })
      },
      {
        id: 73,
        name: 'Single variant',
        price: 200000,
        sku: 'S16733211231',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 49 } })
      },
      {
        id: 74,
        name: 'Single variant',
        price: 400000,
        sku: 'S16733209131',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 50 } })
      },
      {
        id: 75,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733207081',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 51 } })
      },
      {
        id: 76,
        name: 'Single variant',
        price: 250000,
        sku: 'S16733205521',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 52 } })
      },
      {
        id: 77,
        name: 'Single variant',
        price: 400000,
        sku: 'S16733204141',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 53 } })
      },
      {
        id: 78,
        name: 'Single variant',
        price: 200000,
        sku: 'S16733199201',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 54 } })
      },
      {
        id: 79,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733196911',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 55 } })
      },
      {
        id: 80,
        name: 'Single variant',
        price: 200000,
        sku: 'S16733191921',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 56 } })
      },
      {
        id: 81,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733190241',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 57 } })
      },
      {
        id: 82,
        name: 'Single variant',
        price: 160000,
        sku: 'S16733185881',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 58 } })
      },
      {
        id: 83,
        name: 'Single variant',
        price: 300000,
        sku: 'S16733182641',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 59 } })
      },
      {
        id: 84,
        name: 'Single variant',
        price: 200000,
        sku: 'S16733178131',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 60 } })
      },
      {
        id: 85,
        name: 'Single variant',
        price: 170000,
        sku: 'S16733173141',
        stock: 80,
        product: await Product.findOneOrFail({ where: { id: 61 } })
      },
      {
        id: 86,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733169041',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 62 } })
      },
      {
        id: 87,
        name: 'Single variant',
        price: 150000,
        sku: 'S16733165871',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 63 } })
      },
      {
        id: 88,
        name: 'Single variant',
        price: 150000,
        sku: 'S16729057321',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 64 } })
      },
      {
        id: 89,
        name: 'Single variant',
        price: 100000,
        sku: 'S16729056671',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 65 } })
      },
      {
        id: 90,
        name: 'Single variant',
        price: 40000,
        sku: 'S16729052711',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 66 } })
      },
      {
        id: 91,
        name: 'Single variant',
        price: 250000,
        sku: 'S16729051501',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 67 } })
      },
      {
        id: 92,
        name: 'Single variant',
        price: 400000,
        sku: 'S16729050931',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 68 } })
      },
      {
        id: 93,
        name: 'Single variant',
        price: 200000,
        sku: 'S16729050281',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 69 } })
      },
      {
        id: 94,
        name: 'Single variant',
        price: 200000,
        sku: 'S16729049141',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 70 } })
      },
      {
        id: 95,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728900631',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 71 } })
      },
      {
        id: 96,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728897961',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 72 } })
      },
      {
        id: 97,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728896361',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 73 } })
      },
      {
        id: 98,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728894731',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 74 } })
      },
      {
        id: 99,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728890811',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 75 } })
      },
      {
        id: 100,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728887571',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 76 } })
      },
      {
        id: 101,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728885361',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 77 } })
      },
      {
        id: 102,
        name: 'Single variant',
        price: 180000,
        sku: 'S16728879661',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 78 } })
      },
      {
        id: 103,
        name: 'Single variant',
        price: 150000,
        sku: 'S16728876861',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 79 } })
      },
      {
        id: 104,
        name: 'Merah garnet',
        price: 150000,
        sku: 'S16728156441',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 105,
        name: 'Ungu amethyst',
        price: 150000,
        sku: 'S16733328561',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 106,
        name: 'Biru aquamarine',
        price: 150000,
        sku: 'S16733328562',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 107,
        name: 'Putih diamond',
        price: 150000,
        sku: 'S16733328563',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 108,
        name: 'Hijau emerald',
        price: 150000,
        sku: 'S16733328564',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 109,
        name: 'Putih moonstone',
        price: 150000,
        sku: 'S16733328565',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 110,
        name: 'Biru sapphire',
        price: 150000,
        sku: 'S16733328566',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 111,
        name: 'Yellow citrine',
        price: 150000,
        sku: 'S16733328567',
        stock: 90,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 112,
        name: 'Hijau peridot',
        price: 150000,
        sku: 'S16733328568',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 113,
        name: 'Green turquoise',
        price: 150000,
        sku: 'S16733328569',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 114,
        name: 'Pink ruby',
        price: 150000,
        sku: 'S167333285610',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 115,
        name: 'Black tourmaline',
        price: 150000,
        sku: 'S167333285611',
        stock: 100,
        product: await Product.findOneOrFail({ where: { id: 80 } })
      },
      {
        id: 116,
        name: 'Single variant',
        price: 90000,
        sku: 'S16741150551',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 81 } })
      },
      {
        id: 117,
        name: 'Gold',
        price: 95000,
        sku: 'S16740343421',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 82 } })
      },
      {
        id: 118,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740339631',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 83 } })
      },
      {
        id: 119,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740336161',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 84 } })
      },
      {
        id: 120,
        name: 'Single variant',
        price: 96000,
        sku: 'S16740333991',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 85 } })
      },
      {
        id: 121,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740331461',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 86 } })
      },
      {
        id: 122,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740304481',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 87 } })
      },
      {
        id: 123,
        name: 'Single variant',
        price: 95000,
        sku: 'S16740245131',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 88 } })
      },
      {
        id: 124,
        name: 'Single variant',
        price: 100000,
        sku: 'S16740237001',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 89 } })
      },
      {
        id: 125,
        name: 'Rose',
        price: 95000,
        sku: 'S16740073541',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 90 } })
      },
      {
        id: 126,
        name: 'Gold',
        price: 95000,
        sku: 'S16740073542',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 90 } })
      },
      {
        id: 127,
        name: 'Gold',
        price: 100000,
        sku: 'S16739419381',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 91 } })
      },
      {
        id: 128,
        name: 'Rose',
        price: 100000,
        sku: 'S16739419991',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 91 } })
      },
      {
        id: 129,
        name: 'Silver',
        price: 100000,
        sku: 'S16739423491',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 91 } })
      },
      {
        id: 130,
        name: 'Gold',
        price: 95000,
        sku: 'S16739414571',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 92 } })
      },
      {
        id: 131,
        name: 'Gold',
        price: 95000,
        sku: 'S16739409841',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 93 } })
      },
      {
        id: 132,
        name: 'Rose',
        price: 95000,
        sku: 'S16739409842',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 93 } })
      },
      {
        id: 133,
        name: 'Gold',
        price: 65000,
        sku: 'S16739399892',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 94 } })
      },
      {
        id: 134,
        name: 'Rose',
        price: 65000,
        sku: 'S16739406341',
        stock: 10,
        product: await Product.findOneOrFail({ where: { id: 94 } })
      },
      {
        id: 135,
        name: 'Silver',
        price: 65000,
        sku: 'S16739406342',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 94 } })
      },
      {
        id: 136,
        name: 'Single variant',
        price: 93000,
        sku: 'S16736032551',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 95 } })
      },
      {
        id: 137,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736025811',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 96 } })
      },
      {
        id: 138,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736022451',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 97 } })
      },
      {
        id: 139,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736020251',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 98 } })
      },
      {
        id: 140,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736016691',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 99 } })
      },
      {
        id: 141,
        name: 'Single variant',
        price: 60000,
        sku: 'S16736008691',
        stock: 0,
        product: await Product.findOneOrFail({ where: { id: 100 } })
      }
    ] as Variant[]

    const variants = Variant.create(data)
    await Variant.save(variants)
  }
}