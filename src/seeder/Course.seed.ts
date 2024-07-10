
import { Course } from '@entity/Course.entity'
import { Seeder } from 'typeorm-extension'

// ...

export default class CourseSeed implements Seeder {
  public async run(): Promise<void> {
    const data: Course[] = [
      {
        id: 1,
        name: 'Short Course',
        description: `- Free Flow Welcome drink : Coffee/Tea/Mineral Water<br />
- Silver Material, Max = 4 Gram<br />
- Free 1 pc Stone of your Selection from our Variety Stone Chart<br />
- 3 Hours of Tuition by Professional Silversmith, Starting from Choosing design & Stone<br />
- Use of Craftman Tools<br />
- Indonesian - English Translator (If Needed)<br />
- Your Personally Created Piece Of Silver Jewellery<br />
- 20% Discount For Your Purchase at Our Shop`,
        price: 550000,
        price_promo: 500000,
        promo_min_amount: 4,
        time: `Monday - Friday: 9.00 - 12.00<br />
Monday - Friday: 12.00 - 15.00`,
      },
      {
        id: 2,
        name: 'Weekend Short Course',
        description: `- Free Flow Welcome drink : Coffee/Tea/Mineral Water<br />
- Silver Material, Max = 4 Gram<br />
- Free 1 pc Stone of your Selection from our Variety Stone Chart<br />
- 3 Hours of Tuition by Professional Silversmith, Starting from Choosing design & Stone<br />
- Use of Craftman Tools<br />
- Indonesian - English Translator (If Needed)<br />
- Your Personally Created Piece Of Silver Jewellery<br />
- 20% Discount For Your Purchase at Our Shop`,
        price: 650000,
        price_promo: 550000,
        promo_min_amount: 4,
        time: `Saturday : 8.00 - 11.00<br />
Saturday : 11.00 - 14.00`,
      },
      {
        id: 3,
        name: 'Fullday Course',
        description: `- Free Flow Welcome drink : Coffee/Tea/Mineral Water<br />
- Silver Material Max = 6 Gram
- Free 2 pcs Stone of your Selection from our Variety Stone Chart<br />
- 6 Hours of Tuition on Design & Tools of All Workshop Facilities & Equipment<br />
- Use of Craftman Tools<br />
- Indonesian - English Translator (If Needed)<br />
- Your Personally Created Piece Of Silver Jewellery<br />
- 20% Discount For Your Purchase at Our Shop<br />
- Lunch Package`,
        price: 1000000,
        price_promo: 950000,
        promo_min_amount: 4,
        time: 'Monday - Saturday : 9.00 - 15.00 (Include +/- 1 Hour Lunch Break)',
      },
      {
        id: 4,
        name: 'Intensive Course',
        description: `- Free Flow Welcome drink : Coffee/Tea/Mineral Water<br />
- Silver Material Max = 12 Gram<br />
- Free 4 pcs Stone of your Selection from our Variety Stone Chart<br />
- 2 Days ( 6 Hours/day ) Course<br />
- Special Excursion on How Silver Melted & Made into Wire & Plate<br />
- Use of Craftman Tools<br />
- Indonesian - English Translator (If Needed)<br />
- Your Personally Created Piece Of Silver Jewellery<br />
- 20% Discount For Your Purchase at Our Shop<br />
- Lunch Package`,
        price: 1900000,
        price_promo: 1800000,
        promo_min_amount: 4,
        time: 'Monday - Saturday : 9.00 - 15.00 (Include +/- 1 Hour Lunch Break)',
      },
    ] as Course[]

    const courses = Course.create(data)
    await Course.save(courses)
  }
}