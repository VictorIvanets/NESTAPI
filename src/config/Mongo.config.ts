import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	}
}

const getMongoString = (configService: ConfigService): string =>
	'mongodb://' +
	configService.get('MONGO_LOGIG') +
	':' +
	configService.get('MONGO_PASWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	':' +
	configService.get('MONGO_PORT') +
	'/' +
	configService.get('MONGO_AUTHDB')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getMongoOptions = () => ({
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
})
