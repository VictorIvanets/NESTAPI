import { Module } from '@nestjs/common'
import { TopPageController } from './top-page.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { AuthModule } from 'src/auth/auth.module'
import { TopPageModel } from './top-page.model/top-page.model'
import { TopPageService } from './top-page.service'

@Module({
	controllers: [TopPageController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'TopPage',
				},
			},
		]),
	],
	providers: [TopPageService],
})
export class TopPageModule {}
