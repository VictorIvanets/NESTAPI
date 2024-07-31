import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { CreateReviewDto } from 'src/review/dto/create.review.dto'
import { Types } from 'mongoose'

const productId = new Types.ObjectId().toHexString()

const testDto: CreateReviewDto = {
	name: 'name',
	title: 'title',
	description: 'string',
	rating: 10,
	productId,
}

describe('REVIEW (e2e)', () => {
	let app: INestApplication
	let createdId: string

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('/review/create (POST)', async (done) => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDto)
			.expect(201)
			.then(({ body }: request.Response) => {
				createdId = body.id
				expect(createdId).toBeDefined()
				// expect(body)
				// console.log(body)
				done()
			})
	})

	afterAll(() => {
		app.close()
	})
})
