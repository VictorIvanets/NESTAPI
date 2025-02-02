import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Inject,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ProductModel } from './product.model'
import { FindProductDto } from './dto/find-product.dto'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductService } from './product.service'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler'
import { IdValidationPipe } from 'src/pipes/validation.pipe'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'

const NOT_PRODUCT = 'такого продкту не знайдено. помилка id'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateProductDto): Promise<ProductModel> {
		return this.productService.create(dto)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string): Promise<ProductModel> {
		const product = await this.productService.findById(id)
		if (!product) {
			throw new NotFoundException(NOT_PRODUCT)
		}
		return product
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string): Promise<void> {
		const delProduct = await this.productService.deleteById(id)
		if (!delProduct) {
			throw new NotFoundException(NOT_PRODUCT)
		}
	}
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: ProductModel,
	): Promise<ProductModel> {
		const updateProduct = await this.productService.updateById(id, dto)
		if (!updateProduct) {
			throw new NotFoundException(NOT_PRODUCT)
		}
		return updateProduct
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto): Promise<ProductModel[]> {
		return this.productService.findWithReview(dto)
	}
}
