import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { TopPageModel } from './top-page.model/top-page.model'
import { FindTopPageDto } from './dto/find-top-page.dto'
import { TopPageService } from './top-page.service'
import { CreateTopPage } from './dto/create-top-page.dto'
import { IdValidationPipe } from 'src/pipes/validation.pipe'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'

@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateTopPage): Promise<CreateTopPage> {
		return this.topPageService.create(dto)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string): Promise<CreateTopPage> {
		const page = await this.topPageService.findById(id)
		if (!page) {
			throw new NotFoundException('Помилка id. Not found')
		}
		return page
	}

	@Get('byAlias/:alias')
	async getByAlias(@Param('alias') alias: string): Promise<CreateTopPage> {
		const page = await this.topPageService.findByAlias(alias)
		if (!page) {
			throw new NotFoundException('Помилка id. Not found')
		}
		return page
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		const delpage = await this.topPageService.deleteById(id)
		if (!delpage) {
			throw new NotFoundException('Помилка id. Not found')
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateTopPage): Promise<CreateTopPage> {
		const upDatepage = await this.topPageService.updateById(id, dto)
		if (!upDatepage) {
			throw new NotFoundException('Помилка id. Not found')
		}
		return upDatepage
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto): Promise<CreateTopPage[]> {
		return this.topPageService.findByCategory(dto.firstLevelCategory)
	}

	@Get('textSearch/:text')
	async textSearch(@Param('text') text: string): Promise<CreateTopPage[]> {
		return this.topPageService.findByText(text)
	}
}
