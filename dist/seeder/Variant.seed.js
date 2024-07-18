"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_entity_1 = require("@entity/Product.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
// ...
class VariantSeed {
    async run() {
        const data = [
            {
                id: 1,
                price: 90000,
                sku: 'S16771244441',
                stock: 268,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 1 } })
            },
            {
                id: 2,
                price: 90000,
                sku: 'S16771243091',
                stock: 267,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 2 } })
            },
            {
                id: 3,
                price: 90000,
                sku: 'S16771239631',
                stock: 269,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 3 } })
            },
            {
                id: 4,
                price: 90000,
                sku: 'S16771230341',
                stock: 270,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 4 } })
            },
            {
                id: 5,
                price: 125000,
                sku: 'S16771216551',
                stock: 300,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 5 } })
            },
            {
                id: 6,
                price: 125000,
                sku: 'S16771209411',
                stock: 300,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 6 } })
            },
            {
                id: 7,
                price: 125000,
                sku: 'S16771206661',
                stock: 30,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 7 } })
            },
            {
                id: 8,
                price: 125000,
                sku: 'S16771201141',
                stock: 50,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 8 } })
            },
            {
                id: 9,
                price: 60000,
                sku: 'S16752381461',
                stock: 50,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 9 } })
            },
            {
                id: 10,
                price: 60000,
                sku: 'S16752371321',
                stock: 30,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 10 } })
            },
            {
                id: 11,
                price: 60000,
                sku: 'S16752274721',
                stock: 50,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 11 } })
            },
            {
                id: 12,
                price: 60000,
                sku: 'S16751494281',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 12 } })
            },
            {
                id: 13,
                price: 100000,
                sku: 'S16740349561',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 13 } })
            },
            {
                id: 14,
                price: 100000,
                sku: 'S16740348461',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 14 } })
            },
            {
                id: 15,
                price: 90000,
                sku: 'S16740346211',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 15 } })
            },
            {
                id: 16,
                price: 160000,
                sku: 'S16740345411',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 16 } })
            },
            {
                id: 17,
                price: 95000,
                sku: 'S16740340911',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 17 } })
            },
            {
                id: 18,
                price: 95000,
                sku: 'S16740340912',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 17 } })
            },
            {
                id: 19,
                price: 95000,
                sku: 'S16740334911',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 18 } })
            },
            {
                id: 20,
                price: 95000,
                sku: 'S16740332651',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 19 } })
            },
            {
                id: 21,
                price: 95000,
                sku: 'S16740248011',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 20 } })
            },
            {
                id: 22,
                price: 95000,
                sku: 'S16740251151',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 20 } })
            },
            {
                id: 23,
                price: 95000,
                sku: 'S16740077501',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 21 } })
            },
            {
                id: 24,
                price: 95000,
                sku: 'S16740077502',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 21 } })
            },
            {
                id: 25,
                price: 95000,
                sku: 'S16739497841',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 22 } })
            },
            {
                id: 26,
                price: 95000,
                sku: 'S16739497981',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 22 } })
            },
            {
                id: 27,
                price: 95000,
                sku: 'S16739489421',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 23 } })
            },
            {
                id: 28,
                price: 65000,
                sku: 'S16739489422',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 23 } })
            },
            {
                id: 29,
                price: 95000,
                sku: 'S16740112111',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 23 } })
            },
            {
                id: 30,
                price: 95000,
                sku: 'S16739485541',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 24 } })
            },
            {
                id: 31,
                price: 95000,
                sku: 'S16739486421',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 24 } })
            },
            {
                id: 32,
                price: 100000,
                sku: 'S16739432581',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 25 } })
            },
            {
                id: 33,
                price: 100000,
                sku: 'S16739432582',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 25 } })
            },
            {
                id: 34,
                price: 100000,
                sku: 'S16739432583',
                stock: 20,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 25 } })
            },
            {
                id: 35,
                price: 97000,
                sku: 'S16739396491',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 26 } })
            },
            {
                id: 36,
                price: 95000,
                sku: 'S16736035381',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 27 } })
            },
            {
                id: 37,
                price: 93000,
                sku: 'S16736031051',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 28 } })
            },
            {
                id: 38,
                price: 60000,
                sku: 'S16736028061',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 29 } })
            },
            {
                id: 39,
                price: 60000,
                sku: 'S16736007121',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 30 } })
            },
            {
                id: 40,
                price: 35000,
                sku: 'S16735177831',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 31 } })
            },
            {
                id: 41,
                price: 55000,
                sku: 'S16735174901',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 32 } })
            },
            {
                id: 42,
                price: 55000,
                sku: 'S16734187601',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 43,
                price: 55000,
                sku: 'S16734193951',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 44,
                price: 55000,
                sku: 'S16734193952',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 45,
                price: 55000,
                sku: 'S16734193953',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 46,
                price: 55000,
                sku: 'S16734193954',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 47,
                price: 55000,
                sku: 'S16734193955',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 48,
                price: 55000,
                sku: 'S16734193956',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 49,
                price: 55000,
                sku: 'S16734193957',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 50,
                price: 55000,
                sku: 'S16734193958',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 51,
                price: 55000,
                sku: 'S16734193959',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 52,
                price: 55000,
                sku: 'S167341939510',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 53,
                price: 55000,
                sku: 'S167341939511',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 54,
                price: 55000,
                sku: 'S167341939512',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 55,
                price: 55000,
                sku: 'S167341939513',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 56,
                price: 55000,
                sku: 'S167341939514',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 57,
                price: 55000,
                sku: 'S167341939515',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } })
            },
            {
                id: 58,
                price: 350000,
                sku: 'S16734894931',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 34 } })
            },
            {
                id: 59,
                price: 150000,
                sku: 'S16734884321',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 35 } })
            },
            {
                id: 60,
                price: 150000,
                sku: 'S16733313781',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 36 } })
            },
            {
                id: 61,
                price: 400000,
                sku: 'S16733308011',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 37 } })
            },
            {
                id: 62,
                price: 150000,
                sku: 'S16733305781',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 38 } })
            },
            {
                id: 63,
                price: 300000,
                sku: 'S16733303231',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 39 } })
            },
            {
                id: 64,
                price: 300000,
                sku: 'S16733300391',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 40 } })
            },
            {
                id: 65,
                price: 300000,
                sku: 'S16733296911',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 41 } })
            },
            {
                id: 66,
                price: 250000,
                sku: 'S16733234121',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 42 } })
            },
            {
                id: 67,
                price: 150000,
                sku: 'S16733225401',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 43 } })
            },
            {
                id: 68,
                price: 150000,
                sku: 'S16733224221',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 44 } })
            },
            {
                id: 69,
                price: 350000,
                sku: 'S16733221531',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 45 } })
            },
            {
                id: 70,
                price: 150000,
                sku: 'S16733215941',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 46 } })
            },
            {
                id: 71,
                price: 165000,
                sku: 'S16733214321',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 47 } })
            },
            {
                id: 72,
                price: 235000,
                sku: 'S16733212661',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 48 } })
            },
            {
                id: 73,
                price: 200000,
                sku: 'S16733211231',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 49 } })
            },
            {
                id: 74,
                price: 400000,
                sku: 'S16733209131',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 50 } })
            },
            {
                id: 75,
                price: 300000,
                sku: 'S16733207081',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 51 } })
            },
            {
                id: 76,
                price: 250000,
                sku: 'S16733205521',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 52 } })
            },
            {
                id: 77,
                price: 400000,
                sku: 'S16733204141',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 53 } })
            },
            {
                id: 78,
                price: 200000,
                sku: 'S16733199201',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 54 } })
            },
            {
                id: 79,
                price: 300000,
                sku: 'S16733196911',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 55 } })
            },
            {
                id: 80,
                price: 200000,
                sku: 'S16733191921',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 56 } })
            },
            {
                id: 81,
                price: 300000,
                sku: 'S16733190241',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 57 } })
            },
            {
                id: 82,
                price: 160000,
                sku: 'S16733185881',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 58 } })
            },
            {
                id: 83,
                price: 300000,
                sku: 'S16733182641',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 59 } })
            },
            {
                id: 84,
                price: 200000,
                sku: 'S16733178131',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 60 } })
            },
            {
                id: 85,
                price: 170000,
                sku: 'S16733173141',
                stock: 80,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 61 } })
            },
            {
                id: 86,
                price: 150000,
                sku: 'S16733169041',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 62 } })
            },
            {
                id: 87,
                price: 150000,
                sku: 'S16733165871',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 63 } })
            },
            {
                id: 88,
                price: 150000,
                sku: 'S16729057321',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 64 } })
            },
            {
                id: 89,
                price: 100000,
                sku: 'S16729056671',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 65 } })
            },
            {
                id: 90,
                price: 40000,
                sku: 'S16729052711',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 66 } })
            },
            {
                id: 91,
                price: 250000,
                sku: 'S16729051501',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 67 } })
            },
            {
                id: 92,
                price: 400000,
                sku: 'S16729050931',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 68 } })
            },
            {
                id: 93,
                price: 200000,
                sku: 'S16729050281',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 69 } })
            },
            {
                id: 94,
                price: 200000,
                sku: 'S16729049141',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 70 } })
            },
            {
                id: 95,
                price: 180000,
                sku: 'S16728900631',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 71 } })
            },
            {
                id: 96,
                price: 180000,
                sku: 'S16728897961',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 72 } })
            },
            {
                id: 97,
                price: 180000,
                sku: 'S16728896361',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 73 } })
            },
            {
                id: 98,
                price: 180000,
                sku: 'S16728894731',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 74 } })
            },
            {
                id: 99,
                price: 180000,
                sku: 'S16728890811',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 75 } })
            },
            {
                id: 100,
                price: 180000,
                sku: 'S16728887571',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 76 } })
            },
            {
                id: 101,
                price: 180000,
                sku: 'S16728885361',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 77 } })
            },
            {
                id: 102,
                price: 180000,
                sku: 'S16728879661',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 78 } })
            },
            {
                id: 103,
                price: 150000,
                sku: 'S16728876861',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 79 } })
            },
            {
                id: 104,
                price: 150000,
                sku: 'S16728156441',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 105,
                price: 150000,
                sku: 'S16733328561',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 106,
                price: 150000,
                sku: 'S16733328562',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 107,
                price: 150000,
                sku: 'S16733328563',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 108,
                price: 150000,
                sku: 'S16733328564',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 109,
                price: 150000,
                sku: 'S16733328565',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 110,
                price: 150000,
                sku: 'S16733328566',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 111,
                price: 150000,
                sku: 'S16733328567',
                stock: 90,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 112,
                price: 150000,
                sku: 'S16733328568',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 113,
                price: 150000,
                sku: 'S16733328569',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 114,
                price: 150000,
                sku: 'S167333285610',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 115,
                price: 150000,
                sku: 'S167333285611',
                stock: 100,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } })
            },
            {
                id: 116,
                price: 90000,
                sku: 'S16741150551',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 81 } })
            },
            {
                id: 117,
                price: 95000,
                sku: 'S16740343421',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 82 } })
            },
            {
                id: 118,
                price: 95000,
                sku: 'S16740339631',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 83 } })
            },
            {
                id: 119,
                price: 95000,
                sku: 'S16740336161',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 84 } })
            },
            {
                id: 120,
                price: 96000,
                sku: 'S16740333991',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 85 } })
            },
            {
                id: 121,
                price: 95000,
                sku: 'S16740331461',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 86 } })
            },
            {
                id: 122,
                price: 95000,
                sku: 'S16740304481',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 87 } })
            },
            {
                id: 123,
                price: 95000,
                sku: 'S16740245131',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 88 } })
            },
            {
                id: 124,
                price: 100000,
                sku: 'S16740237001',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 89 } })
            },
            {
                id: 125,
                price: 95000,
                sku: 'S16740073541',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 90 } })
            },
            {
                id: 126,
                price: 95000,
                sku: 'S16740073542',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 90 } })
            },
            {
                id: 127,
                price: 100000,
                sku: 'S16739419381',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 91 } })
            },
            {
                id: 128,
                price: 100000,
                sku: 'S16739419991',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 91 } })
            },
            {
                id: 129,
                price: 100000,
                sku: 'S16739423491',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 91 } })
            },
            {
                id: 130,
                price: 95000,
                sku: 'S16739414571',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 92 } })
            },
            {
                id: 131,
                price: 95000,
                sku: 'S16739409841',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 93 } })
            },
            {
                id: 132,
                price: 95000,
                sku: 'S16739409842',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 93 } })
            },
            {
                id: 133,
                price: 65000,
                sku: 'S16739399892',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 94 } })
            },
            {
                id: 134,
                price: 65000,
                sku: 'S16739406341',
                stock: 10,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 94 } })
            },
            {
                id: 135,
                price: 65000,
                sku: 'S16739406342',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 94 } })
            },
            {
                id: 136,
                price: 93000,
                sku: 'S16736032551',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 95 } })
            },
            {
                id: 137,
                price: 60000,
                sku: 'S16736025811',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 96 } })
            },
            {
                id: 138,
                price: 60000,
                sku: 'S16736022451',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 97 } })
            },
            {
                id: 139,
                price: 60000,
                sku: 'S16736020251',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 98 } })
            },
            {
                id: 140,
                price: 60000,
                sku: 'S16736016691',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 99 } })
            },
            {
                id: 141,
                price: 60000,
                sku: 'S16736008691',
                stock: 0,
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 100 } })
            }
        ];
        const variants = Variant_entity_1.Variant.create(data);
        await Variant_entity_1.Variant.save(variants);
    }
}
exports.default = VariantSeed;
