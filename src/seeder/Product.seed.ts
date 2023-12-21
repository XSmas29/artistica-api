import { Category } from '@entity/Category.entity'
import { Material } from '@entity/Material.entity'
import { Attribute } from '@entity/Attribute.entity'
import { Product } from '@entity/Product.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class ProductSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Product[] = [
      {
        id: 1,
        name: 'Butterfly Earring Rose Gold',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> <br /> ',
        slug: 'butterfly-earring-rose-gold',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 2,
        name: 'Butterfly Earring Gold',
        description: ' <br />Product Specifications:<br /><br />1. Material : Titanium<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> <br /> ',
        slug: 'butterfly-earring-gold',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 3,
        name: 'Chain Earrings',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> <br /> ',
        slug: 'chain-earrings',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 4,
        name: 'Chan Earrings',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> <br /> ',
        slug: 'chan-earrings',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 5,
        name: 'Tiffany Necklace',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> <br /> ',
        slug: 'tiffany-necklace',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 6,
        name: 'Gems Two Necklace',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> ',
        slug: 'gems-two-necklace',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 7,
        name: 'Greenbelle Necklace',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> ',
        slug: 'greenbelle-necklace',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 8,
        name: 'Dalmi 2in1 Necklace',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Models (consult first)<br /> ',
        slug: 'dalmi-2in1-necklace',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 9,
        name: 'Ceren Ring',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ceren-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 10,
        name: 'Casey Ring',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)<br /> ',
        slug: 'casey-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 11,
        name: 'BULCHNI RING',
        description: ' <br />Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)<br /> ',
        slug: 'bulchni-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 12,
        name: 'Dami Ring',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'dami-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 13,
        name: 'Korean Ring Woman Rose-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-ring-112331',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 14,
        name: 'Ring Love rose small-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-ring-11233',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 15,
        name: 'Bracelet night butterfly_Stanless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the bracelet that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-braceletta',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 16,
        name: 'bracelet woman Strong -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-bracelett',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 17,
        name: 'Lyra bracelet woman_Stanless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-bracelet-',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 18,
        name: 'Julia Necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace-love',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 19,
        name: 'Varya bracelet woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace12111',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 20,
        name: 'sephia bracelet woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace1191211',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 21,
        name: 'celeste necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the Necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace114',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 22,
        name: 'Riana Necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace12',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 23,
        name: 'Maria Necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion1-1-ring-1141111123412',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 24,
        name: 'Alea Necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion1-1-ring-11411111234',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 25,
        name: 'Ring loving woman -Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-ring-1123',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 26,
        name: 'Necklace shybird Gold-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-necklace',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 27,
        name: 'Bracelet Antiquity Woman Rose-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1111',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 28,
        name: 'Eternity Ring Woman SIlver-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-11',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 29,
        name: 'Korean Ring Woman Rose-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 30,
        name: 'Ring Love rose-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 31,
        name: 'Dahlia Leaf Bross Gold-Stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'dahlia-leaf-bross-stainless-steel',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 6 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 32,
        name: 'Jena Bross Gold-Stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'jena-bross-gold-stainless-stell',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 6 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 33,
        name: 'Aleya Broos Stainless steel Collection',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'aleya-broos-stainless-stell-collection',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 6 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 34,
        name: 'Bracelet silver 925-Korean style',
        description: 'Kamu manis, ditemenin sama gelang yang manis kaya diatas 👆😌 btw,ini limited edition cuma ada di toko artistica jewelry. #gelangmanis #gelangcantik #gelang #jewelry',
        slug: 'gelang-silver-925with-permata-mutiara',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 2 } })
      },
      {
        id: 35,
        name: 'Ring love edition-Silver 925',
        description: 'Cinta tidak menjadi kenyataan sampai di uji dan di panaskan seperti cincin yang di tempa ini. Ibarat pedang tajam yang terus menerus di tempa diatas bara api,dibutuhkan rintangan, kedewasaan, kecerdasan, serta kesabaran. #jewelry #ring #love #cinta #perjuangan #lovestory',
        slug: 'cincin-silver-925-ring-love',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 36,
        name: 'Cincin silver 925-korean style 2',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-korean-style-2',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 2 } })
      },
      {
        id: 37,
        name: 'Gelang silver 925-Permata mutiara',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : mutiara<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Perhiasan<br /><br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'gelang-silver-925-permata-mutiara',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 38,
        name: 'Cincin silver 925-Permata putih bulat',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Perhiasan<br /><br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-putih-bulat',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 39,
        name: 'Anting silver 925-Model Panjang',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Perhiasan<br /><br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'silver-9235',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 40,
        name: 'Cincin silver 925-Model permata 5',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Perhiasan<br /><br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-model-permata-5',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 41,
        name: 'Anting silver 925-Koren style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Perhiasan<br /><br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting-silver-925-koren-style',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 42,
        name: 'Cincin silver 925-Permata biru',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-biru',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 43,
        name: 'Cincin silver 925-Permata hitam besar',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-hitam-besar',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 44,
        name: 'Cincin silver 925-Permata kuning',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-kuning',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 45,
        name: 'Cincin silver 925-style eropa',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-style-eropa',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 46,
        name: 'Cincin silver 925-permata love hitam',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-love-hitam',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 47,
        name: 'Cincin ilver 925-Permata hitam',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-ilver-925-permata-hitam',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 48,
        name: 'Kalung silver 925-simplicity collection',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'kalung-silver-925-simplicity-collection',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 49,
        name: 'Cincin silver 925-Permata hijau',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-hijau',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 50,
        name: 'Gelang silver 925-permata queen',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'gelang-silver-925-permata-queen',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 51,
        name: 'Cincin silver 925-Triple ring-triple permata',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-triple-ring-triple-permata',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 52,
        name: 'Anting silver 925-korean style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 53,
        name: 'Kalung silver 925-Korean Style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'kalung-silver-925-korean-style',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 54,
        name: 'Cincin silver 925-Queen Ring',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-queen-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 55,
        name: 'Kalung Mutiara Korean Style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'kalung-mutiara-korean-style',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 56,
        name: 'Anting silver 925-Model Panjang',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting-silver-925-model-panjang',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 57,
        name: 'Anting Silver 925-europen style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting-silver-925-europen-style',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 58,
        name: 'Cincin Silver 925-Triple Ring',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-triple-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 59,
        name: 'Cincin silver 925-Koean Style 2',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-koean-style-2',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 60,
        name: 'Anting Silver 925-Korean Style',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting-silver-925-korean-style',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 61,
        name: 'Cincin Silver 925-Permata Putih',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-putih',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 62,
        name: 'Cincin Silver 925-Permata Hitam',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-silver-925-permata-hitam',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 63,
        name: 'Anting Silver 925-Bulat',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'anting-silver-925-bulat',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 64,
        name: 'Kalung Model Korea terbaru',
        description: 'kalau dilihat lihat warna bulatnya kayak buah apa ya 😳😳😳 #kalung #indonesia #jewelry #jakarta #gold #accessories #necklace #gelang #aksesoris #cincin #kalung #perhiasan #emas #anting #aksesorismurah #titanium #kalungmurah #gelangmurah #xuping #cincincouple #jualkalung',
        slug: 'kalung-model-korea-terbaru',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 6 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 65,
        name: 'Gelang Model Korea',
        description: '#gelang #indonesia #jewelry #jakarta #gold #accessories #necklace #bracelet #diamond #gelang #aksesoris #cincin #kalung #perhiasan #emas #anting #aksesorismurah #titanium #kalungmurah #gelangmurah #xuping',
        slug: 'gelang-model-korea',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 66,
        name: 'Kalung Beaded Collcetion by Artistica',
        description: 'Let your mood speak for itself with our new fall jewelry collection. #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'kalung-beaded-collcetion-by-artistica',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 6 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 67,
        name: 'Anting Korean style Silver 925',
        description: 'Have you ever been caught by surprise? Let’s just say that you can never go wrong with this trendy jewelry ring. #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'anting-korean-style-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 4 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 68,
        name: 'Gelang cewek model USA',
        description: 'Gelang eksklusif #gelang #indonesia #jewelry #jakarta #gold #accessories #necklace #bracelet #diamond #gelang #aksesoris #cincin #kalung #perhiasan #emas #anting #aksesorismurah #titanium #kalungmurah #gelangmurah ##gelang #indonesia #jewelry #jakarta #gold #accessories #necklace #bracelet #diamond #gelang #aksesoris #cincin #kalung #perhiasan #emas #anting #aksesorismurah #titanium #kalungmurah #gelangmurah ##xupingxuping',
        slug: 'gelang-cewek-model-usa',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 69,
        name: 'Cincin cowo Keren Silver 925',
        description: 'If you&#39;ve ever been a jewelry lover, then you already know that there&#39;s nothing like the feeling of finding a piece that truly speaks to you. #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'cincin-cowo-keren-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 70,
        name: 'Cincin Cowok Silver 925',
        description: 'Wear a ring that makes you smile. #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'cincin-cowok-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 71,
        name: 'Cincin Eropan style silver 925',
        description: 'Everybody loves jewelry. Make it your own with these simple, affordable pieces! ☀ #cincin #jewelry #jakarta #gold #accessories #jewellery #silver #murah #bracelet #ring #diamond #rings #gelang #aksesoris #cincin #kalung #perhiasan #cincinnati #emas #anting #titanium',
        slug: 'cincin-eropan-style-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 72,
        name: 'Cincin Triple Ring silver 925',
        description: 'Get your nails done, get your hair done, and shop our jewelry. We have everything you need to be ready for fall. #kalung #indonesia #jewelry #jakarta #gold #accessories #necklace #gelang #aksesoris #cincin #kalung #perhiasan #emas #anting #aksesorismurah #titanium #kalungmurah #gelangmurah #xuping #cincincouple #jualkalung',
        slug: 'cincin-triple-ring-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 73,
        name: 'Cincin Perak Permata Ungu',
        description: 'You are the queen. You&#39;ll always shine through in the most gorgeous way. #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'cincin-perak-permata-ungu',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 74,
        name: 'Cincin Wanita Model Korea',
        description: 'A little extra sparkle never hurt anyone. Shop our latest jewelry designs now! #jewelry #shopping #luxury #bhfyp #jewelry #stylish #onlineshopping #gold #smallbusiness #accessories #trendy #etsy #earrings #jewellery #necklace #silver #handmadejewelry #bracelet #ring #crystals #diamond',
        slug: 'cincin-wanita-model-korea',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 75,
        name: 'CIncin Birthstone Ring Silver 925',
        description: 'We believe in the power of jewelry to transform us, to make us feel good, and to remind us that we are enough. That&#39;s why we love recycling our old jewelry into new pieces. We&#39;re not just creating new jewelry—we&#39;re turning old trash into treasure! #Jewelry #jewelryshop #jewelrygram #love #beautifulgirls',
        slug: 'cincin',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 76,
        name: 'Cincin Birthstone Ring siilver 925',
        description: 'Humanity at its finest. We hope you&#39;ve enjoyed this collection of jewelry made from recycled silver. #jewelry #jewelryshop #recycleart #love',
        slug: 'cincin-birthstone-ring-siilver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 77,
        name: 'Cincin Birthstone Ring Silver 925',
        description: 'In our new series, "Jewelry Recycling: Humanity," we&#39;ll be profiling some of the most beautiful and inspiring pieces of jewelry that have been made from recycled silver. We&#39;re so excited to start this journey with you, and we hope you&#39;ll join us on the next chapter. #jewelry #fashion #jewellery #handmade #earrings #accessories #necklace #gold #handmadejewelry #love #style #jewelrydesigner #silver #jewelryaddict #ring #bracelet #jewelrydesign #jewels #rings #bracelets #diamonds #design #diamond #beautiful #instagood #art #instajewelry #gemstones #luxury #jewelrygram',
        slug: 'cincin-birthstone-ring-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 78,
        name: 'Cincin Birthstoner ring silver 925',
        description: 'Wear your heart on your sleeve. #perhiasan #emas #cincin #gelang #perhiasanemas #kalung #jewelry #anting #cincinemas #k #xuping #tokoemas #perhiasanmurah #berlian #aksesoris #perhiasanwanita #jewellery #gold #perhiasanlapisemas #fashion #xupingmurah #emasmurah #gelangemas #jakarta #titanium #kalungmurah #kalungemas #liontin #perak #jualemas',
        slug: 'cincin-birthstoner-ring-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 79,
        name: 'Birthstone ring putih moonston silver 925',
        description: 'Are you ready to feel like a queen? We&#39;ve got the perfect ring for you. This is a piece of jewelry that&#39;s sure to make you feel like royalty and leave your friends green with envy. #weddingring #jewelry #jewellry #cincinnikah',
        slug: 'birthstone-ring-putih-moonston-silver-925',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 80,
        name: 'Cincin Birthstone Ring Adjustable Silver 925',
        description: 'Spesifikasi Produk :<br /><br />1. Bahan : Perak 925 ( bahan perak dengan kadar 92,5%, kadar perak ini paling baik dibuat untuk perhiasan, sisanya bahan lain sebagai komposisi 7,5% ).<br />2. Jenis Permata : Zirconia<br /><br />KELENGKAPAN SETIAP PEMESANAN CINCIN :<br />1. Kotak Cincin <br />JAMINAN PRODUK BERGARANSI<br />1. Garansi REPAIR untuk bentuk / model cincin yang tidak sesuai dengan yang sudah dipesan<br />2. Garansi RESIZE jika salah ukuran<br />3. Garansi REPAIR jika permata lepas selama 1 Tahun<br />Keuntungan berbelanja di Artistica Jewelry :<br />1. Material Bahan Berkualitas, Terjamin Bukti Keaslian<br />2. Bisa Custom Model Cincin (konsultasikan terlebih dahulu)<br />3. Dikerjakan oleh Tenaga Ahli Berpengalaman',
        slug: 'cincin-birthstone-ring-adjustable-silver-925',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 1 } })
      },
      {
        id: 81,
        name: 'Necklace night butterfly_Stanless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the bracelet that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-braceletta1',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 82,
        name: 'Bracelet Korean Style_Stanless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-bracelet-gelang',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 83,
        name: 'bracelet woman Strong -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace-bracelet',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 84,
        name: 'Julia Necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace-love-kalung',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 85,
        name: 'Varya necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace121111',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 86,
        name: 'Kestrel necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the Necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace121',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 87,
        name: 'Necklace falling in love -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the Necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-woman-fashion-accessories-braceletfashion-necklace12',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 88,
        name: 'bracelet woman Strong -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace11912',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 2 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 89,
        name: 'Jeni Ring Woman-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel11',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 90,
        name: 'Hermosa necklace woman -stainless steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the Necklace that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-braceletfashion-necklace113',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 91,
        name: 'RIng tough woman -Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-ring-11',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 92,
        name: 'Necklace dream woman-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-necklace-11',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 93,
        name: 'Necklace tough woman -Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-necklace-1',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 94,
        name: 'Necklace night butterfly-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-1-bracelet',
        single_variant: false,
        category: await Category.findOneOrFail({ where: { id: 3 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 95,
        name: 'Eternity Ring Woman SIlver-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion1-111',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 96,
        name: 'Korean Ring Woman Silver-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ringfashion',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 97,
        name: 'Korean Ring Woman Gold-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories-ring',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 98,
        name: 'Cyntia Ring Woman-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman-fashion-accessories',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 99,
        name: 'Adel Ring Woman-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin-ring-woman',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      },
      {
        id: 100,
        name: 'Ring Love Gold-Stainless Steel',
        description: 'Product Specifications:<br /><br />1. Material : Stainless steel<br /><br />WARRANTY PRODUCT WARRANTY<br /><br />1. REPAIR guarantee for the shape / model of the ring that does not match what has been ordered<br />2. RESIZE guarantee if wrong size<br />3. REPAIR guarantee if the gem is loose for 1 year<br /><br />Benefits of shopping at Artistica Jewelry:<br />1. Quality Materials, Guaranteed Evidence of Authenticity<br />2. Custom Ring Models (consult first)',
        slug: 'ring-love-rose-stainless-steel-cincin',
        single_variant: true,
        category: await Category.findOneOrFail({ where: { id: 1 } }),
        material: await Material.findOneOrFail({ where: { id: 4 } })
      }
    ] as Product[]

    const products = Product.create(data)
    await Product.save(products)
  }
}