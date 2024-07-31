import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthDto } from './dto/auth.dto'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { UserModel } from './auth.model/user.model'
import { InjectModel } from 'nestjs-typegoose'
import { genSaltSync, hashSync, compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
const USER_NOT_FOUND = 'Такого користувача не знайдено'
const PASS_NOT_CORRECT = 'Невірний пароль'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
		private readonly jwtService: JwtService,
	) {}
	async createUser(dto: AuthDto): Promise<unknown> {
		const salt = genSaltSync(10)
		const newUser = new this.userModel({
			email: dto.login,
			passwordHash: hashSync(dto.password, salt),
		})
		return newUser.save()
	}
	async findUser(email: string): Promise<UserModel> {
		return this.userModel.findOne({ email }).exec()
	}

	async validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>> {
		const user = await this.findUser(email)
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND)
		}
		const isCorrectPass = await compare(password, user.passwordHash)
		if (!isCorrectPass) {
			throw new UnauthorizedException(PASS_NOT_CORRECT)
		}
		return { email: user.email }
	}

	async login(email: string): Promise<object> {
		const payload = { email }
		return {
			access_token: await this.jwtService.signAsync(payload),
		}
	}
}
