import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common'
import { CreateReviewDto } from './dto/create.review.dto'
import { ReviewService } from './review.service'
import { REVIEW_NOT_FOUND } from './review.const'
import { ReviewModel } from './review.model/review.model'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'
import { UserEmail } from '../decorators/user-email.decorator'
import { IdValidationPipe } from 'src/pipes/validation.pipe'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewServise: ReviewService) {}

	@Post('create')
	async create(@Body() dto: CreateReviewDto): Promise<ReviewModel> {
		return this.reviewServise.create(dto)
	}

	@UseGuards(JwtAuthGuard)
	@Get('byProduct/:productId')
	async getByProduct(
		@Param('productId', IdValidationPipe) productId: string,
		@UserEmail() email: string,
	): Promise<ReviewModel[]> {
		console.log(email)
		return this.reviewServise.findByProductId(productId)
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string): Promise<void> {
		const deleteDoc = await this.reviewServise.delete(id)
		if (!deleteDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
		}
	}
}
