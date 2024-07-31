import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	IsStrongPassword,
	ValidateNested,
} from 'class-validator'
import { TopLevelCategiry } from '../top-page.model/top-page.model'
import { Type } from 'class-transformer'

export class HhDataDto {
	@IsNumber()
	count: number
	@IsNumber()
	juniorSalary: number
	@IsNumber()
	middleSalary: number
	@IsNumber()
	seniorSalary: number
}

export class TopPageAdvantageDto {
	@IsString()
	title: string
	@IsString()
	description: string
}

export class CreateTopPage {
	@IsEnum(TopLevelCategiry)
	firstLevelCategory: TopLevelCategiry

	@IsString()
	secondCategory: string

	@IsString()
	title: string

	@IsString()
	alias: string

	@IsString()
	category: string

	@IsOptional()
	@ValidateNested()
	@Type(() => HhDataDto)
	hh?: HhDataDto

	@IsArray()
	@ValidateNested()
	@Type(() => TopPageAdvantageDto)
	advantages: TopPageAdvantageDto[]

	@IsString()
	seoText: string

	@IsOptional()
	@IsString()
	tagsTitle?: string

	@IsArray()
	@IsString({ each: true })
	tags: string[]
}
