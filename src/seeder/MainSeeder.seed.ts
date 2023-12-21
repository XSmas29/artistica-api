import { DataSource } from 'typeorm'
import { runSeeder, Seeder } from 'typeorm-extension'
import VariantSeed from '@seeder/Variant.seed'
import ProductSeed from '@seeder/Product.seed'
import MaterialSeed from '@seeder/Material.seed'
import CategorySeed from '@seeder/Category.seed'
import ImageSeeder from '@seeder/Image.seed'
import DeliveryProviderSeed from './DeliveryProvider.seed'
import UserSeed from './User.seed'
import AttributeSeed from './Attribute.seed'
import AttributeOptionSeed from './AttributeOption.seed'
import VariantValueSeed from './VariantValue.seed'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
	): Promise<void> {
		await runSeeder(dataSource, AttributeSeed)
		await runSeeder(dataSource, ProductSeed)
		await runSeeder(dataSource, AttributeOptionSeed)
		await runSeeder(dataSource, VariantSeed)
		await runSeeder(dataSource, VariantValueSeed)
		await runSeeder(dataSource, ImageSeeder)
		await runSeeder(dataSource, MaterialSeed)
		await runSeeder(dataSource, CategorySeed)
		await runSeeder(dataSource, DeliveryProviderSeed)
		await runSeeder(dataSource, UserSeed)
	}
}