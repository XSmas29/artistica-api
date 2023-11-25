import { DataSource } from 'typeorm'
import { runSeeder, Seeder } from 'typeorm-extension'
import VariantSeeder from './Variant.seed'
import ProductSeeder from './Product.seed'
import ImageSeeder from './Image.seed'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
	): Promise<void> {
		await runSeeder(dataSource, ProductSeeder)
		await runSeeder(dataSource, VariantSeeder)
		await runSeeder(dataSource, ImageSeeder)
	}
}