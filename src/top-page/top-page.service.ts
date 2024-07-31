import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { TopLevelCategiry, TopPageModel } from './top-page.model/top-page.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CreateTopPage } from './dto/create-top-page.dto'
import { title } from 'process'

@Injectable()
export class TopPageService {
	constructor(@InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>) {}

	async create(dto: CreateTopPage): Promise<CreateTopPage> {
		return this.topPageModel.create(dto)
	}

	async findById(id: string): Promise<CreateTopPage> {
		return this.topPageModel.findById(id).exec()
	}

	async findByAlias(alias: string): Promise<CreateTopPage> {
		return this.topPageModel.findOne({ alias }).exec()
	}

	async deleteById(id: string): Promise<CreateTopPage> {
		return this.topPageModel.findByIdAndDelete(id).exec()
	}

	async updateById(id: string, dto: CreateTopPage): Promise<CreateTopPage> {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}

	async findByCategory(firstLevelCategory: TopLevelCategiry): Promise<CreateTopPage[]> {
		return this.topPageModel
			.aggregate()
			.match({
				firstLevelCategory,
			})
			.group({
				_id: { secondCategory: '$secondCategory' },
				pages: { $push: { alias: '$alias', title: '$title', _id: '$_id' } },
			})
			.exec()
	}

	async findByText(texts: string): Promise<CreateTopPage[]> {
		return this.topPageModel.find({ $text: { $search: texts, $caseSensitive: false } }).exec()
	}
}
