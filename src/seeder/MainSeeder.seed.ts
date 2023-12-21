import { DataSource } from 'typeorm'
import { runSeeder, Seeder } from 'typeorm-extension'
import VariantSeeder from '@seeder/Variant.seed'
import ProductSeeder from '@seeder/Product.seed'
import MaterialSeeder from '@seeder/Material.seed'
import CategorySeeder from '@seeder/Category.seed'
import ImageSeeder from '@seeder/Image.seed'
import DeliveryProviderSeed from './DeliveryProvider.seed'
import UserSeed from './User.seed'
import OptionSeed from './Option.seed'
import OptionValueSeed from './OptionValue.seed'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
	): Promise<void> {
		await runSeeder(dataSource, OptionSeed)
		await runSeeder(dataSource, ProductSeeder)
		await runSeeder(dataSource, OptionValueSeed)
		await runSeeder(dataSource, VariantSeeder)
		await runSeeder(dataSource, ImageSeeder)
		await runSeeder(dataSource, MaterialSeeder)
		await runSeeder(dataSource, CategorySeeder)
		await runSeeder(dataSource, DeliveryProviderSeed)
		await runSeeder(dataSource, UserSeed)
	}
}