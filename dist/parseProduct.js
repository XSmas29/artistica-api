"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let prod_ctr = 0;
let variant_ctr = 0;
const img_ctr = 0;
const parsedProduct = products_1.default.map(product => {
    prod_ctr++;
    const variants = product.variants.map(variant => {
        variant_ctr++;
        return {
            id: variant_ctr,
            name: variant.details[0].name,
            price: variant.basePrices[0].value,
            sku: variant.SKU,
            stock: variant.stocks.total >= 0 ? variant.stocks.total : 0,
            images: variant.imageURLs,
            product_id: prod_ctr,
            slug: product.slug
        };
    });
    let product_category_id = -1;
    let product_material_id = -1;
    product.collections.forEach(collection => {
        if (collection.details[0].name === 'RING') {
            product_category_id = 1;
        }
        else if (collection.details[0].name === 'BRACELLET' || collection.details[0].name === 'BRACELET') {
            product_category_id = 2;
        }
        else if (collection.details[0].name === 'NECKLACE') {
            product_category_id = 3;
        }
        else if (collection.details[0].name === 'EARRINGS') {
            product_category_id = 4;
        }
        else if (collection.details[0].name === 'PENDANT') {
            product_category_id = 5;
        }
        else if (collection.details[0].name === 'OTHERS' || collection.details[0].name === 'OTHER') {
            product_category_id = 6;
        }
        if (collection.details[0].name === 'SILVER 925') {
            product_material_id = 1;
        }
        else if (collection.details[0].name === 'BRASS & BRONZE') {
            product_material_id = 2;
        }
        else if (collection.details[0].name === 'BEADS & GEMSTONES') {
            product_material_id = 3;
        }
    });
    if (product_category_id === -1) {
        console.log('no category: ', product.ID, product.collections.map(collection => collection.details[0].name));
    }
    if (product_material_id === -1) {
        product_material_id = 4;
    }
    // console.log('no material: ', product.ID, product.collections.map(collection => collection.details[0].name))
    return {
        id: prod_ctr,
        name: product.details[0].name,
        description: product.details[0].description,
        slug: product.slug,
        single_variant: product.variants.length === 1,
        // images: product.imageURLs,
        // variants,
        category_id: product_category_id,
        material_id: product_material_id
    };
});
console.log(parsedProduct);
// const images: { id: number; name: string; variant_id: number; product_id: number, slug: string }[] = []
// const variants: { id: number; name: string; price: number; sku: string; stock: number; product_id: number; images: string[], slug: string }[] = []
// parsedProduct.forEach(product => {
//   variants.push(...product.variants)
//   product.images.forEach(image => {
//     img_ctr++
//     images.push({
//       id: img_ctr,
//       name: image,
//       variant_id: -1,
//       product_id: product.id,
//       slug: product.slug
//     })
//   })
// })
// variants.forEach(variant => {
//   variant.images.forEach(image => {
//     img_ctr++
//     images.push({
//       id: img_ctr,
//       name: image,
//       variant_id: variant.id,
//       product_id: variant.product_id,
//       slug: variant.slug
//     })
//   })
// })
// // console.log(variants)
// // console.log(images.slice(200))
// const imageNames = [
//   'img_1_1700887400879.png',
// 'img_2_1700887400882.png',
// 'img_3_1700887400883.png',
// 'img_4_1700887400883.png',
// 'img_5_1700887400884.png',
// 'img_6_1700887400885.png',
// 'img_7_1700887400886.png',
// 'img_8_1700887400886.png',
// 'img_8_1700887400887.png',
// 'img_9_1700887400888.png',
// 'img_10_1700887400888.png',
// 'img_11_1700887400889.png',
// 'img_12_1700887400890.png',
// 'img_13_1700887400891.png',
// 'img_13_1700887400892.png',
// 'img_13_1700887400893.png',
// 'img_14_1700887400894.png',
// 'img_14_1700887400895.png',
// 'img_15_1700887400896.png',
// 'img_16_1700887400898.png',
// 'img_17_1700887400898.png',
// 'img_17_1700887400900.png',
// 'img_18_1700887400900.png',
// 'img_18_1700887400903.png',
// 'img_19_1700887400903.png',
// 'img_19_1700887400903.png',
// 'img_20_1700887400904.png',
// 'img_20_1700887400905.png',
// 'img_21_1700887400906.png',
// 'img_21_1700887400907.png',
// 'img_21_1700887400908.png',
// 'img_21_1700887400909.png',
// 'img_22_1700887400910.png',
// 'img_22_1700887400911.png',
// 'img_23_1700887400912.png',
// 'img_23_1700887400913.png',
// 'img_24_1700887400914.png',
// 'img_24_1700887400915.png',
// 'img_24_1700887400916.png',
// 'img_25_1700887400917.png',
// 'img_25_1700887400918.png',
// 'img_25_1700887400919.png',
// 'img_25_1700887400920.png',
// 'img_25_1700887400921.png',
// 'img_26_1700887400922.png',
// 'img_26_1700887400923.png',
// 'img_27_1700887400924.png',
// 'img_27_1700887400925.png',
// 'img_28_1700887400926.png',
// 'img_28_1700887400930.png',
// 'img_28_1700887400930.png',
// 'img_28_1700887400931.png',
// 'img_29_1700887400932.png',
// 'img_29_1700887400932.png',
// 'img_29_1700887400933.png',
// 'img_30_1700887400941.png',
// 'img_30_1700887400941.png',
// 'img_31_1700887400942.png',
// 'img_31_1700887400943.png',
// 'img_32_1700887400943.png',
// 'img_32_1700887400944.png',
// 'img_33_1700887400944.jpg',
// 'img_33_1700887400945.jpg',
// 'img_33_1700887400946.jpg',
// 'img_33_1700887400947.jpg',
// 'img_33_1700887400947.jpg',
// 'img_34_1700887400948.jpg',
// 'img_35_1700887400949.jpg',
// 'img_36_1700887400950.jpg',
// 'img_36_1700887400950.jpg',
// 'img_37_1700887400951.jpg',
// 'img_37_1700887400952.jpg',
// 'img_37_1700887400953.jpg',
// 'img_37_1700887400954.jpg',
// 'img_38_1700887400954.jpg',
// 'img_38_1700887400955.jpg',
// 'img_38_1700887400956.jpg',
// 'img_39_1700887400957.jpg',
// 'img_39_1700887400957.jpg',
// 'img_39_1700887400958.jpg',
// 'img_39_1700887400959.jpg',
// 'img_40_1700887400960.jpg',
// 'img_40_1700887400960.jpg',
// 'img_41_1700887400961.jpg',
// 'img_41_1700887400962.jpg',
// 'img_42_1700887400963.jpg',
// 'img_42_1700887400964.jpg',
// 'img_43_1700887400965.jpg',
// 'img_44_1700887400966.jpg',
// 'img_44_1700887400967.jpg',
// 'img_45_1700887400969.jpg',
// 'img_45_1700887400970.jpg',
// 'img_46_1700887400970.jpg',
// 'img_47_1700887400971.jpg',
// 'img_47_1700887400973.jpg',
// 'img_47_1700887400973.jpg',
// 'img_48_1700887400974.jpg',
// 'img_48_1700887400975.jpg',
// 'img_48_1700887400977.jpg',
// 'img_48_1700887400977.jpg',
// 'img_48_1700887400978.jpg',
// 'img_49_1700887400980.jpg',
// 'img_50_1700887400980.jpg',
// 'img_50_1700887400982.jpg',
// 'img_51_1700887400982.jpg',
// 'img_51_1700887400983.jpg',
// 'img_52_1700887400985.jpg',
// 'img_52_1700887400985.jpg',
// 'img_53_1700887400987.jpg',
// 'img_53_1700887400987.jpg',
// 'img_54_1700887400988.jpg',
// 'img_55_1700887400990.jpg',
// 'img_55_1700887400990.jpg',
// 'img_56_1700887400992.jpg',
// 'img_56_1700887400992.jpg',
// 'img_57_1700887400994.jpg',
// 'img_58_1700887400994.jpg',
// 'img_58_1700887400995.jpg',
// 'img_59_1700887400997.jpg',
// 'img_60_1700887400997.jpg',
// 'img_60_1700887400999.jpg',
// 'img_61_1700887400999.jpg',
// 'img_61_1700887401001.jpg',
// 'img_62_1700887401003.jpg',
// 'img_62_1700887401003.jpg',
// 'img_63_1700887401005.jpg',
// 'img_63_1700887401005.jpg',
// 'img_64_1700887401007.jpg',
// 'img_64_1700887401007.jpg',
// 'img_65_1700887401008.jpg',
// 'img_65_1700887401010.jpg',
// 'img_66_1700887401010.jpg',
// 'img_66_1700887401011.jpg',
// 'img_66_1700887401013.jpg',
// 'img_66_1700887401013.jpg',
// 'img_66_1700887401014.png',
// 'img_67_1700887401016.jpg',
// 'img_67_1700887401016.jpg',
// 'img_68_1700887401018.jpg',
// 'img_69_1700887401018.jpg',
// 'img_69_1700887401019.jpg',
// 'img_70_1700887401021.jpg',
// 'img_71_1700887401021.jpg',
// 'img_71_1700887401022.jpg',
// 'img_71_1700887401024.jpg',
// 'img_72_1700887401024.jpg',
// 'img_73_1700887401025.jpg',
// 'img_74_1700887401026.jpg',
// 'img_75_1700887401027.jpg',
// 'img_76_1700887401028.jpg',
// 'img_77_1700887401030.jpg',
// 'img_78_1700887401030.jpg',
// 'img_79_1700887401032.jpg',
// 'img_80_1700887401032.png',
// 'img_81_1700887401033.png',
// 'img_82_1700887401035.png',
// 'img_82_1700887401035.png',
// 'img_83_1700887401036.png',
// 'img_84_1700887401038.png',
// 'img_84_1700887401038.png',
// 'img_85_1700887401040.png',
// 'img_85_1700887401040.png',
// 'img_86_1700887401041.png',
// 'img_86_1700887401043.png',
// 'img_87_1700887401043.png',
// 'img_88_1700887401045.png',
// 'img_89_1700887401045.png',
// 'img_90_1700887401046.png',
// 'img_90_1700887401048.png',
// 'img_91_1700887401048.png',
// 'img_91_1700887401050.png',
// 'img_92_1700887401050.png',
// 'img_92_1700887401052.png',
// 'img_93_1700887401052.png',
// 'img_93_1700887401053.png',
// 'img_93_1700887401054.png',
// 'img_94_1700887401055.png',
// 'img_94_1700887401057.png',
// 'img_95_1700887401057.png',
// 'img_95_1700887401059.png',
// 'img_96_1700887401060.png',
// 'img_96_1700887401061.png',
// 'img_96_1700887401061.png',
// 'img_97_1700887401063.png',
// 'img_97_1700887401063.png',
// 'img_98_1700887401065.png',
// 'img_98_1700887401065.png',
// 'img_98_1700887401067.png',
// 'img_99_1700887401067.png',
// 'img_100_1700887401069.png',
// 'img_100_1700887401069.png',
// 'img_17_1700887401070.png',
// 'img_17_1700887401072.png',
// 'img_20_1700887401072.png',
// 'img_20_1700887401073.png',
// 'img_21_1700887401075.png',
// 'img_21_1700887401076.png',
// 'img_22_1700887401076.png',
// 'img_22_1700887401078.png',
// 'img_23_1700887401078.png',
// 'img_23_1700887401080.png',
// 'img_23_1700887401081.png',
// 'img_24_1700887401081.png',
// 'img_24_1700887401083.png',
// 'img_25_1700887401083.png',
// 'img_25_1700887401084.png',
// 'img_25_1700887401086.png',
// 'img_33_1700887401086.png',
// 'img_33_1700887401087.png',
// 'img_33_1700887401088.png',
// 'img_33_1700887401090.png',
// 'img_33_1700887401090.png',
// 'img_33_1700887401092.png',
// 'img_33_1700887401092.png',
// 'img_33_1700887401094.png',
// 'img_33_1700887401094.png',
// 'img_33_1700887401096.png',
// 'img_33_1700887401096.png',
// 'img_33_1700887401097.png',
// 'img_33_1700887401099.png',
// 'img_33_1700887401099.png',
// 'img_33_1700887401100.png',
// 'img_33_1700887401102.png',
// 'img_80_1700887401102.png',
// 'img_80_1700887401103.png',
// 'img_80_1700887401105.jpg',
// 'img_80_1700887401105.png',
// 'img_80_1700887401107.png',
// 'img_80_1700887401107.png',
// 'img_80_1700887401108.jpg',
// 'img_80_1700887401109.png',
// 'img_80_1700887401110.png',
// 'img_80_1700887401112.png',
// 'img_80_1700887401112.png',
// 'img_80_1700887401114.png',
// 'img_90_1700887401114.png',
// 'img_90_1700887401115.png',
// 'img_91_1700887401117.png',
// 'img_91_1700887401117.png',
// 'img_91_1700887401119.png',
// 'img_92_1700887401120.png',
// 'img_93_1700887401120.png',
// 'img_93_1700887401122.png',
// 'img_94_1700887401122.png',
// 'img_94_1700887401123.png',
// 'img_94_1700887401124.png',
// ]
// images.forEach(image => {
//   // console.log(image.name.split('/').slice(-1)[0])
//   setTimeout(() => {
//     // const name = `img_${image.product_id}_${Date.now()}.${image.name.split('.').slice(-1)[0]}`
//     // fs.renameSync(`./public/${image.name.split('/').slice(-1)[0]}`, `./public/products/${image.product_id}/${name}`)
//     // console.log(`./public/products/${image.product_id}/${name}`)
//   }, 1 * image.id)
// })
// const formattedImages = images.map((image, i) => {
//   return {
//     id: image.id,
//     path: imageNames[i],
//     variant_id: image.variant_id > 0 ? image.variant_id : null,
//     product_id: image.product_id,
//     // slug: image.slug
//   }
// })
// console.log(formattedImages.slice(200))
