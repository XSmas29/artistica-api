import { DataSource } from 'typeorm'
import { runSeeder, Seeder } from 'typeorm-extension'
import VariantSeeder from './Variant.seed'
import ProductSeeder from './Product.seed'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
	): Promise<void> {
		await runSeeder(dataSource, ProductSeeder)
		await runSeeder(dataSource, VariantSeeder)
	}
}