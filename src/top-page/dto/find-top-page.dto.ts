import { IsEnum } from 'class-validator'
import { TopLevelCategiry } from '../top-page.model/top-page.model'

export class FindTopPageDto {
	@IsEnum(TopLevelCategiry)
	firstLevelCategory: TopLevelCategiry
}
