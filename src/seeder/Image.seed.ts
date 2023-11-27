import { Image } from '@entity/Image.entity'
import { Variant } from '@entity/Variant.entity'
import { Product } from '@entity/Product.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class ImageSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Image[] = [
      {
        id: 1,
        path: 'img_1_1700887400879.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 1 }})
      },
      {
        id: 2,
        path: 'img_2_1700887400882.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 2 }})
      },
      {
        id: 3,
        path: 'img_3_1700887400883.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 3 }})
      },
      {
        id: 4,
        path: 'img_4_1700887400883.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 4 }})
      },
      {
        id: 5,
        path: 'img_5_1700887400884.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 5 }})
      },
      {
        id: 6,
        path: 'img_6_1700887400885.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 6 }})
      },
      {
        id: 7,
        path: 'img_7_1700887400886.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 7 }})
      },
      {
        id: 8,
        path: 'img_8_1700887400886.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 8 }})
      },
      {
        id: 9,
        path: 'img_8_1700887400887.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 8 }})
      },
      {
        id: 10,
        path: 'img_9_1700887400888.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 9 }})
      },
      {
        id: 11,
        path: 'img_10_1700887400888.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 10 }})
      },
      {
        id: 12,
        path: 'img_11_1700887400889.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 11 }})
      },
      {
        id: 13,
        path: 'img_12_1700887400890.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 12 }})
      },
      {
        id: 14,
        path: 'img_13_1700887400891.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 13 }})
      },
      {
        id: 15,
        path: 'img_13_1700887400892.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 13 }})
      },
      {
        id: 16,
        path: 'img_13_1700887400893.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 13 }})
      },
      {
        id: 17,
        path: 'img_14_1700887400894.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 14 }})
      },
      {
        id: 18,
        path: 'img_14_1700887400895.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 14 }})
      },
      {
        id: 19,
        path: 'img_15_1700887400896.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 15 }})
      },
      {
        id: 20,
        path: 'img_16_1700887400898.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 16 }})
      },
      {
        id: 21,
        path: 'img_17_1700887400898.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 17 }})
      },
      {
        id: 22,
        path: 'img_17_1700887400900.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 17 }})
      },
      {
        id: 23,
        path: 'img_18_1700887400900.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 18 }})
      },
      {
        id: 24,
        path: 'img_18_1700887400903.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 18 }})
      },
      {
        id: 25,
        path: 'img_19_1700887400903.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 19 }})
      },
      {
        id: 26,
        path: 'img_19_1700887400903.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 19 }})
      },
      {
        id: 27,
        path: 'img_20_1700887400904.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 20 }})
      },
      {
        id: 28,
        path: 'img_20_1700887400905.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 20 }})
      },
      {
        id: 29,
        path: 'img_21_1700887400906.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 30,
        path: 'img_21_1700887400907.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 31,
        path: 'img_21_1700887400908.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 32,
        path: 'img_21_1700887400909.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 33,
        path: 'img_22_1700887400910.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 22 }})
      },
      {
        id: 34,
        path: 'img_22_1700887400911.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 22 }})
      },
      {
        id: 35,
        path: 'img_23_1700887400912.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 23 }})
      },
      {
        id: 36,
        path: 'img_23_1700887400913.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 23 }})
      },
      {
        id: 37,
        path: 'img_24_1700887400914.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 24 }})
      },
      {
        id: 38,
        path: 'img_24_1700887400915.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 24 }})
      },
      {
        id: 39,
        path: 'img_24_1700887400916.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 24 }})
      },
      {
        id: 40,
        path: 'img_25_1700887400917.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 41,
        path: 'img_25_1700887400918.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 42,
        path: 'img_25_1700887400919.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 43,
        path: 'img_25_1700887400920.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 44,
        path: 'img_25_1700887400921.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 45,
        path: 'img_26_1700887400922.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 26 }})
      },
      {
        id: 46,
        path: 'img_26_1700887400923.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 26 }})
      },
      {
        id: 47,
        path: 'img_27_1700887400924.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 27 }})
      },
      {
        id: 48,
        path: 'img_27_1700887400925.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 27 }})
      },
      {
        id: 49,
        path: 'img_28_1700887400926.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 28 }})
      },
      {
        id: 50,
        path: 'img_28_1700887400930.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 28 }})
      },
      {
        id: 51,
        path: 'img_28_1700887400930.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 28 }})
      },
      {
        id: 52,
        path: 'img_28_1700887400931.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 28 }})
      },
      {
        id: 53,
        path: 'img_29_1700887400932.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 29 }})
      },
      {
        id: 54,
        path: 'img_29_1700887400932.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 29 }})
      },
      {
        id: 55,
        path: 'img_29_1700887400933.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 29 }})
      },
      {
        id: 56,
        path: 'img_30_1700887400941.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 30 }})
      },
      {
        id: 57,
        path: 'img_30_1700887400941.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 30 }})
      },
      {
        id: 58,
        path: 'img_31_1700887400942.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 31 }})
      },
      {
        id: 59,
        path: 'img_31_1700887400943.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 31 }})
      },
      {
        id: 60,
        path: 'img_32_1700887400943.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 32 }})
      },
      {
        id: 61,
        path: 'img_32_1700887400944.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 32 }})
      },
      {
        id: 62,
        path: 'img_33_1700887400944.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 63,
        path: 'img_33_1700887400945.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 64,
        path: 'img_33_1700887400946.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 65,
        path: 'img_33_1700887400947.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 66,
        path: 'img_33_1700887400947.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 67,
        path: 'img_34_1700887400948.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 34 }})
      },
      {
        id: 68,
        path: 'img_35_1700887400949.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 35 }})
      },
      {
        id: 69,
        path: 'img_36_1700887400950.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 36 }})
      },
      {
        id: 70,
        path: 'img_36_1700887400950.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 36 }})
      },
      {
        id: 71,
        path: 'img_37_1700887400951.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 37 }})
      },
      {
        id: 72,
        path: 'img_37_1700887400952.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 37 }})
      },
      {
        id: 73,
        path: 'img_37_1700887400953.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 37 }})
      },
      {
        id: 74,
        path: 'img_37_1700887400954.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 37 }})
      },
      {
        id: 75,
        path: 'img_38_1700887400954.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 38 }})
      },
      {
        id: 76,
        path: 'img_38_1700887400955.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 38 }})
      },
      {
        id: 77,
        path: 'img_38_1700887400956.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 38 }})
      },
      {
        id: 78,
        path: 'img_39_1700887400957.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 39 }})
      },
      {
        id: 79,
        path: 'img_39_1700887400957.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 39 }})
      },
      {
        id: 80,
        path: 'img_39_1700887400958.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 39 }})
      },
      {
        id: 81,
        path: 'img_39_1700887400959.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 39 }})
      },
      {
        id: 82,
        path: 'img_40_1700887400960.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 40 }})
      },
      {
        id: 83,
        path: 'img_40_1700887400960.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 40 }})
      },
      {
        id: 84,
        path: 'img_41_1700887400961.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 41 }})
      },
      {
        id: 85,
        path: 'img_41_1700887400962.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 41 }})
      },
      {
        id: 86,
        path: 'img_42_1700887400963.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 42 }})
      },
      {
        id: 87,
        path: 'img_42_1700887400964.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 42 }})
      },
      {
        id: 88,
        path: 'img_43_1700887400965.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 43 }})
      },
      {
        id: 89,
        path: 'img_44_1700887400966.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 44 }})
      },
      {
        id: 90,
        path: 'img_44_1700887400967.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 44 }})
      },
      {
        id: 91,
        path: 'img_45_1700887400969.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 45 }})
      },
      {
        id: 92,
        path: 'img_45_1700887400970.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 45 }})
      },
      {
        id: 93,
        path: 'img_46_1700887400970.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 46 }})
      },
      {
        id: 94,
        path: 'img_47_1700887400971.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 47 }})
      },
      {
        id: 95,
        path: 'img_47_1700887400973.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 47 }})
      },
      {
        id: 96,
        path: 'img_47_1700887400973.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 47 }})
      },
      {
        id: 97,
        path: 'img_48_1700887400974.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 48 }})
      },
      {
        id: 98,
        path: 'img_48_1700887400975.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 48 }})
      },
      {
        id: 99,
        path: 'img_48_1700887400977.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 48 }})
      },
      {
        id: 100,
        path: 'img_48_1700887400977.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 48 }})
      },
      {
        id: 101,
        path: 'img_48_1700887400978.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 48 }})
      },
      {
        id: 102,
        path: 'img_49_1700887400980.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 49 }})
      },
      {
        id: 103,
        path: 'img_50_1700887400980.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 50 }})
      },
      {
        id: 104,
        path: 'img_50_1700887400982.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 50 }})
      },
      {
        id: 105,
        path: 'img_51_1700887400982.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 51 }})
      },
      {
        id: 106,
        path: 'img_51_1700887400983.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 51 }})
      },
      {
        id: 107,
        path: 'img_52_1700887400985.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 52 }})
      },
      {
        id: 108,
        path: 'img_52_1700887400985.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 52 }})
      },
      {
        id: 109,
        path: 'img_53_1700887400987.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 53 }})
      },
      {
        id: 110,
        path: 'img_53_1700887400987.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 53 }})
      },
      {
        id: 111,
        path: 'img_54_1700887400988.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 54 }})
      },
      {
        id: 112,
        path: 'img_55_1700887400990.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 55 }})
      },
      {
        id: 113,
        path: 'img_55_1700887400990.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 55 }})
      },
      {
        id: 114,
        path: 'img_56_1700887400992.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 56 }})
      },
      {
        id: 115,
        path: 'img_56_1700887400992.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 56 }})
      },
      {
        id: 116,
        path: 'img_57_1700887400994.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 57 }})
      },
      {
        id: 117,
        path: 'img_58_1700887400994.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 58 }})
      },
      {
        id: 118,
        path: 'img_58_1700887400995.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 58 }})
      },
      {
        id: 119,
        path: 'img_59_1700887400997.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 59 }})
      },
      {
        id: 120,
        path: 'img_60_1700887400997.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 60 }})
      },
      {
        id: 121,
        path: 'img_60_1700887400999.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 60 }})
      },
      {
        id: 122,
        path: 'img_61_1700887400999.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 61 }})
      },
      {
        id: 123,
        path: 'img_61_1700887401001.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 61 }})
      },
      {
        id: 124,
        path: 'img_62_1700887401003.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 62 }})
      },
      {
        id: 125,
        path: 'img_62_1700887401003.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 62 }})
      },
      {
        id: 126,
        path: 'img_63_1700887401005.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 63 }})
      },
      {
        id: 127,
        path: 'img_63_1700887401005.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 63 }})
      },
      {
        id: 128,
        path: 'img_64_1700887401007.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 64 }})
      },
      {
        id: 129,
        path: 'img_64_1700887401007.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 64 }})
      },
      {
        id: 130,
        path: 'img_65_1700887401008.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 65 }})
      },
      {
        id: 131,
        path: 'img_65_1700887401010.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 65 }})
      },
      {
        id: 132,
        path: 'img_66_1700887401010.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 66 }})
      },
      {
        id: 133,
        path: 'img_66_1700887401011.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 66 }})
      },
      {
        id: 134,
        path: 'img_66_1700887401013.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 66 }})
      },
      {
        id: 135,
        path: 'img_66_1700887401013.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 66 }})
      },
      {
        id: 136,
        path: 'img_66_1700887401014.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 66 }})
      },
      {
        id: 137,
        path: 'img_67_1700887401016.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 67 }})
      },
      {
        id: 138,
        path: 'img_67_1700887401016.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 67 }})
      },
      {
        id: 139,
        path: 'img_68_1700887401018.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 68 }})
      },
      {
        id: 140,
        path: 'img_69_1700887401018.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 69 }})
      },
      {
        id: 141,
        path: 'img_69_1700887401019.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 69 }})
      },
      {
        id: 142,
        path: 'img_70_1700887401021.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 70 }})
      },
      {
        id: 143,
        path: 'img_71_1700887401021.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 71 }})
      },
      {
        id: 144,
        path: 'img_71_1700887401022.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 71 }})
      },
      {
        id: 145,
        path: 'img_71_1700887401024.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 71 }})
      },
      {
        id: 146,
        path: 'img_72_1700887401024.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 72 }})
      },
      {
        id: 147,
        path: 'img_73_1700887401025.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 73 }})
      },
      {
        id: 148,
        path: 'img_74_1700887401026.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 74 }})
      },
      {
        id: 149,
        path: 'img_75_1700887401027.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 75 }})
      },
      {
        id: 150,
        path: 'img_76_1700887401028.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 76 }})
      },
      {
        id: 151,
        path: 'img_77_1700887401030.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 77 }})
      },
      {
        id: 152,
        path: 'img_78_1700887401030.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 78 }})
      },
      {
        id: 153,
        path: 'img_79_1700887401032.jpg',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 79 }})
      },
      {
        id: 154,
        path: 'img_80_1700887401032.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 155,
        path: 'img_81_1700887401033.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 81 }})
      },
      {
        id: 156,
        path: 'img_82_1700887401035.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 82 }})
      },
      {
        id: 157,
        path: 'img_82_1700887401035.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 82 }})
      },
      {
        id: 158,
        path: 'img_83_1700887401036.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 83 }})
      },
      {
        id: 159,
        path: 'img_84_1700887401038.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 84 }})
      },
      {
        id: 160,
        path: 'img_84_1700887401038.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 84 }})
      },
      {
        id: 161,
        path: 'img_85_1700887401040.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 85 }})
      },
      {
        id: 162,
        path: 'img_85_1700887401040.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 85 }})
      },
      {
        id: 163,
        path: 'img_86_1700887401041.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 86 }})
      },
      {
        id: 164,
        path: 'img_86_1700887401043.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 86 }})
      },
      {
        id: 165,
        path: 'img_87_1700887401043.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 87 }})
      },
      {
        id: 166,
        path: 'img_88_1700887401045.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 88 }})
      },
      {
        id: 167,
        path: 'img_89_1700887401045.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 89 }})
      },
      {
        id: 168,
        path: 'img_90_1700887401046.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 90 }})
      },
      {
        id: 169,
        path: 'img_90_1700887401048.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 90 }})
      },
      {
        id: 170,
        path: 'img_91_1700887401048.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 91 }})
      },
      {
        id: 171,
        path: 'img_91_1700887401050.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 91 }})
      },
      {
        id: 172,
        path: 'img_92_1700887401050.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 92 }})
      },
      {
        id: 173,
        path: 'img_92_1700887401052.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 92 }})
      },
      {
        id: 174,
        path: 'img_93_1700887401052.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 93 }})
      },
      {
        id: 175,
        path: 'img_93_1700887401053.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 93 }})
      },
      {
        id: 176,
        path: 'img_93_1700887401054.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 93 }})
      },
      {
        id: 177,
        path: 'img_94_1700887401055.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 94 }})
      },
      {
        id: 178,
        path: 'img_94_1700887401057.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 94 }})
      },
      {
        id: 179,
        path: 'img_95_1700887401057.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 95 }})
      },
      {
        id: 180,
        path: 'img_95_1700887401059.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 95 }})
      },
      {
        id: 181,
        path: 'img_96_1700887401060.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 96 }})
      },
      {
        id: 182,
        path: 'img_96_1700887401061.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 96 }})
      },
      {
        id: 183,
        path: 'img_96_1700887401061.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 96 }})
      },
      {
        id: 184,
        path: 'img_97_1700887401063.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 97 }})
      },
      {
        id: 185,
        path: 'img_97_1700887401063.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 97 }})
      },
      {
        id: 186,
        path: 'img_98_1700887401065.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 98 }})
      },
      {
        id: 187,
        path: 'img_98_1700887401065.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 98 }})
      },
      {
        id: 188,
        path: 'img_98_1700887401067.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 98 }})
      },
      {
        id: 189,
        path: 'img_99_1700887401067.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 99 }})
      },
      {
        id: 190,
        path: 'img_100_1700887401069.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 100 }})
      },
      {
        id: 191,
        path: 'img_100_1700887401069.png',
        variant_id: null,
        product: await Product.findOneOrFail({where: {id: 100 }})
      },
      {
        id: 192,
        path: 'img_17_1700887401070.png',
        variant: await Variant.findOneOrFail({where: {id: 17 }}),
        product: await Product.findOneOrFail({where: {id: 17 }})
      },
      {
        id: 193,
        path: 'img_17_1700887401072.png',
        variant: await Variant.findOneOrFail({where: {id: 18 }}),
        product: await Product.findOneOrFail({where: {id: 17 }})
      },
      {
        id: 194,
        path: 'img_20_1700887401072.png',
        variant: await Variant.findOneOrFail({where: {id: 21 }}),
        product: await Product.findOneOrFail({where: {id: 20 }})
      },
      {
        id: 195,
        path: 'img_20_1700887401073.png',
        variant: await Variant.findOneOrFail({where: {id: 22 }}),
        product: await Product.findOneOrFail({where: {id: 20 }})
      },
      {
        id: 196,
        path: 'img_21_1700887401075.png',
        variant: await Variant.findOneOrFail({where: {id: 23 }}),
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 197,
        path: 'img_21_1700887401076.png',
        variant: await Variant.findOneOrFail({where: {id: 24 }}),
        product: await Product.findOneOrFail({where: {id: 21 }})
      },
      {
        id: 198,
        path: 'img_22_1700887401076.png',
        variant: await Variant.findOneOrFail({where: {id: 25 }}),
        product: await Product.findOneOrFail({where: {id: 22 }})
      },
      {
        id: 199,
        path: 'img_22_1700887401078.png',
        variant: await Variant.findOneOrFail({where: {id: 26 }}),
        product: await Product.findOneOrFail({where: {id: 22 }})
      },
      {
        id: 200,
        path: 'img_23_1700887401078.png',
        variant: await Variant.findOneOrFail({where: {id: 27 }}),
        product: await Product.findOneOrFail({where: {id: 23 }})
      },
      {
        id: 201,
        path: 'img_23_1700887401080.png',
        variant: await Variant.findOneOrFail({where: {id: 28 }}),
        product: await Product.findOneOrFail({where: {id: 23 }})
      },
      {
        id: 202,
        path: 'img_23_1700887401081.png',
        variant: await Variant.findOneOrFail({where: {id: 29 }}),
        product: await Product.findOneOrFail({where: {id: 23 }})
      },
      {
        id: 203,
        path: 'img_24_1700887401081.png',
        variant: await Variant.findOneOrFail({where: {id: 30 }}),
        product: await Product.findOneOrFail({where: {id: 24 }})
      },
      {
        id: 204,
        path: 'img_24_1700887401083.png',
        variant: await Variant.findOneOrFail({where: {id: 31 }}),
        product: await Product.findOneOrFail({where: {id: 24 }})
      },
      {
        id: 205,
        path: 'img_25_1700887401083.png',
        variant: await Variant.findOneOrFail({where: {id: 32 }}),
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 206,
        path: 'img_25_1700887401084.png',
        variant: await Variant.findOneOrFail({where: {id: 33 }}),
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 207,
        path: 'img_25_1700887401086.png',
        variant: await Variant.findOneOrFail({where: {id: 34 }}),
        product: await Product.findOneOrFail({where: {id: 25 }})
      },
      {
        id: 208,
        path: 'img_33_1700887401086.png',
        variant: await Variant.findOneOrFail({where: {id: 42 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 209,
        path: 'img_33_1700887401087.png',
        variant: await Variant.findOneOrFail({where: {id: 43 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 210,
        path: 'img_33_1700887401088.png',
        variant: await Variant.findOneOrFail({where: {id: 44 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 211,
        path: 'img_33_1700887401090.png',
        variant: await Variant.findOneOrFail({where: {id: 45 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 212,
        path: 'img_33_1700887401090.png',
        variant: await Variant.findOneOrFail({where: {id: 46 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 213,
        path: 'img_33_1700887401092.png',
        variant: await Variant.findOneOrFail({where: {id: 47 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 214,
        path: 'img_33_1700887401092.png',
        variant: await Variant.findOneOrFail({where: {id: 48 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 215,
        path: 'img_33_1700887401094.png',
        variant: await Variant.findOneOrFail({where: {id: 49 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 216,
        path: 'img_33_1700887401094.png',
        variant: await Variant.findOneOrFail({where: {id: 50 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 217,
        path: 'img_33_1700887401096.png',
        variant: await Variant.findOneOrFail({where: {id: 51 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 218,
        path: 'img_33_1700887401096.png',
        variant: await Variant.findOneOrFail({where: {id: 52 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 219,
        path: 'img_33_1700887401097.png',
        variant: await Variant.findOneOrFail({where: {id: 53 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 220,
        path: 'img_33_1700887401099.png',
        variant: await Variant.findOneOrFail({where: {id: 54 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 221,
        path: 'img_33_1700887401099.png',
        variant: await Variant.findOneOrFail({where: {id: 55 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 222,
        path: 'img_33_1700887401100.png',
        variant: await Variant.findOneOrFail({where: {id: 56 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 223,
        path: 'img_33_1700887401102.png',
        variant: await Variant.findOneOrFail({where: {id: 57 }}),
        product: await Product.findOneOrFail({where: {id: 33 }})
      },
      {
        id: 224,
        path: 'img_80_1700887401102.png',
        variant: await Variant.findOneOrFail({where: {id: 104 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 225,
        path: 'img_80_1700887401103.png',
        variant: await Variant.findOneOrFail({where: {id: 105 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 226,
        path: 'img_80_1700887401105.jpg',
        variant: await Variant.findOneOrFail({where: {id: 106 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 227,
        path: 'img_80_1700887401105.png',
        variant: await Variant.findOneOrFail({where: {id: 107 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 228,
        path: 'img_80_1700887401107.png',
        variant: await Variant.findOneOrFail({where: {id: 108 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 229,
        path: 'img_80_1700887401107.png',
        variant: await Variant.findOneOrFail({where: {id: 109 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 230,
        path: 'img_80_1700887401108.jpg',
        variant: await Variant.findOneOrFail({where: {id: 110 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 231,
        path: 'img_80_1700887401109.png',
        variant: await Variant.findOneOrFail({where: {id: 111 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 232,
        path: 'img_80_1700887401110.png',
        variant: await Variant.findOneOrFail({where: {id: 112 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 233,
        path: 'img_80_1700887401112.png',
        variant: await Variant.findOneOrFail({where: {id: 113 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 234,
        path: 'img_80_1700887401112.png',
        variant: await Variant.findOneOrFail({where: {id: 114 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 235,
        path: 'img_80_1700887401114.png',
        variant: await Variant.findOneOrFail({where: {id: 115 }}),
        product: await Product.findOneOrFail({where: {id: 80 }})
      },
      {
        id: 236,
        path: 'img_90_1700887401114.png',
        variant: await Variant.findOneOrFail({where: {id: 125 }}),
        product: await Product.findOneOrFail({where: {id: 90 }})
      },
      {
        id: 237,
        path: 'img_90_1700887401115.png',
        variant: await Variant.findOneOrFail({where: {id: 126 }}),
        product: await Product.findOneOrFail({where: {id: 90 }})
      },
      {
        id: 238,
        path: 'img_91_1700887401117.png',
        variant: await Variant.findOneOrFail({where: {id: 127 }}),
        product: await Product.findOneOrFail({where: {id: 91 }})
      },
      {
        id: 239,
        path: 'img_91_1700887401117.png',
        variant: await Variant.findOneOrFail({where: {id: 128 }}),
        product: await Product.findOneOrFail({where: {id: 91 }})
      },
      {
        id: 240,
        path: 'img_91_1700887401119.png',
        variant: await Variant.findOneOrFail({where: {id: 129 }}),
        product: await Product.findOneOrFail({where: {id: 91 }})
      },
      {
        id: 241,
        path: 'img_92_1700887401120.png',
        variant: await Variant.findOneOrFail({where: {id: 130 }}),
        product: await Product.findOneOrFail({where: {id: 92 }})
      },
      {
        id: 242,
        path: 'img_93_1700887401120.png',
        variant: await Variant.findOneOrFail({where: {id: 131 }}),
        product: await Product.findOneOrFail({where: {id: 93 }})
      },
      {
        id: 243,
        path: 'img_93_1700887401122.png',
        variant: await Variant.findOneOrFail({where: {id: 132 }}),
        product: await Product.findOneOrFail({where: {id: 93 }})
      },
      {
        id: 244,
        path: 'img_94_1700887401122.png',
        variant: await Variant.findOneOrFail({where: {id: 133 }}),
        product: await Product.findOneOrFail({where: {id: 94 }})
      },
      {
        id: 245,
        path: 'img_94_1700887401123.png',
        variant: await Variant.findOneOrFail({where: {id: 134 }}),
        product: await Product.findOneOrFail({where: {id: 94 }})
      },
      {
        id: 246,
        path: 'img_94_1700887401124.png',
        variant: await Variant.findOneOrFail({where: {id: 135 }}),
        product: await Product.findOneOrFail({where: {id: 94 }})
      }
    ] as Image[]
    const images = Image.create(data)
    await Image.save(images)
  }
}