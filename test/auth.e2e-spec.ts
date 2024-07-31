import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { disconnect } from 'mongoose'
import { AuthDto } from 'src/auth/dto/auth.dto'

const loginDto: AuthDto = {
	login: 'b@b.ua',
	password: 'b',
}

describe('AUTH (e2e)', () => {
	let app: INestApplication
	let createdId: string
	let token: string

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('auth/login (POST) 200 OK', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.access_token).toBeDefined()
			})
	})

	it('auth/login (POST) ERROR PASS', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '5' })
			.expect(401, {
				message: 'Невірний пароль',
				error: 'Unauthorized',
				statusCode: 401,
			})
	})

	it('auth/login (POST) ERROR LOGIN', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: '1b@b.ua' })
			.expect(401, {
				message: 'Такого користувача не знайдено',
				error: 'Unauthorized',
				statusCode: 401,
			})
	})

	afterAll(() => {
		disconnect()
	})
})
