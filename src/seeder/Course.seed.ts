
import { Course } from '@entity/Course.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class CourseSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Course[] = [
      {
        id: 1,
        name: 'Short Course',
        description: `What You Get:
- Free Flow Welcome drink : Coffee/Tea/Mineral Water.
- Silver Material, Max = 4 Gram
- Free 1 pc Stone of your Selection from our Variety Stone Chart.
- 3 Hours of Tuition by Professional Silversmith, Starting from Choosing design & Stone
- Use of Craftman Tools.
- Indonesian - English Translator (If Needed).
- Your Personally Created Piece Of Silver Jewellery.
- 20% Discount For Your Purchase at Our Shop.`,
        price: 550000,
        price_promo: 500000,
        promo_min_amount: 4,
        time: `Monday - Friday: 9.00 - 12.00
Monday - Friday: 12.00 - 15.00`,
      },
      {
        id: 2,
        name: 'Weekend Short Course',
        description: `What You Get:
- Free Flow Welcome drink : Coffee/Tea/Mineral Water.
- Silver Material, Max = 4 Gram
- Free 1 pc Stone of your Selection from our Variety Stone Chart.
- 3 Hours of Tuition by Professional Silversmith, Starting from Choosing design & Stone
- Use of Craftman Tools.
- Indonesian - English Translator (If Needed).
- Your Personally Created Piece Of Silver Jewellery.
- 20% Discount For Your Purchase at Our Shop.`,
        price: 650000,
        price_promo: 550000,
        promo_min_amount: 4,
        time: `Saturday : 8.00 - 11.00
Saturday : 11.00 - 14.00`,
      },
      {
        id: 3,
        name: 'Fullday Course',
        description: `What You Get:
- Free Flow Welcome drink : Coffee/Tea/Mineral Water.
- Silver Material Max = 6 Grm
- Free 2 pc Stone of your Selection from our Variety Stone Chart.
- 6 Hours of Tuition on Design & Tools of All Workshop Facilities & Equipment.
- Use of Craftman Tools.
- Indonesian - English Translator (If Needed).
- Your Personally Created Piece Of Silver Jewellery.
- 20% Discount For Your Purchase at Our Shop.
- Lunch Package.`,
        price: 1000000,
        price_promo: 950000,
        promo_min_amount: 4,
        time: 'Monday - Saturday : 9.00 - 15.00 (Include +/- 1 Hour Lunch Break).',
      },
      {
        id: 4,
        name: 'Intensive Course',
        description: `What You Get:
- Free Flow Welcome drink : Coffee/Tea/Mineral Water.
- Silver Material Max = 12 Grm
- Free 4 pc Stone of your Selection from our Variety Stone Chart.
- 2 Days ( 6 Hours/day ) Course.
- Special Excursion on How Silver Melted & Made into Wire & Plate.
- Use of Craftman Tools.
- Indonesian - English Translator (If Needed).
- Your Personally Created Piece Of Silver Jewellery.
- 20% Discount For Your Purchase at Our Shop.
- Lunch Package.`,
        price: 1900000,
        price_promo: 1800000,
        promo_min_amount: 4,
        time: 'Monday - Saturday : 9.00 - 15.00 (Include +/- 1 Hour Lunch Break).',
      },
    ] as Course[]

    const courses = Course.create(data)
    await Course.save(courses)
  }
}