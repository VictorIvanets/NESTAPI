import { prop, index } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export enum TopLevelCategiry {
	Courses,
	Services,
	Books,
	Products,
}

export class HhData {
	@prop()
	count: number
	@prop()
	juniorSalary: number
	@prop()
	middleSalary: number
	@prop()
	seniorSalary: number
}

export class TopPageAdvantage {
	@prop()
	title: string
	@prop()
	description: string
}

export interface TopPageModel extends Base {}

@index({ '$**': 'text' })
export class TopPageModel extends TimeStamps {
	@prop({ enum: TopLevelCategiry })
	firstLevelCategory: TopLevelCategiry
	@prop()
	secondCategory: string
	@prop()
	title: string
	@prop()
	alias: string
	@prop()
	category: string
	@prop({ type: () => [HhData] })
	hh?: HhData
	@prop({ type: () => [TopPageAdvantage] })
	advantages: TopPageAdvantage[]
	@prop()
	seoText: string
	@prop()
	tagsTitle?: string
	@prop({ type: () => [String] })
	tags: string[]
}
