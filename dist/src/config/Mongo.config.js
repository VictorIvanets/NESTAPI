"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return {
        uri: getMongoString(configService),
        ...getMongoOptions(),
    };
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => 'mongodb://' +
    configService.get('MONGO_LOGIG') +
    ':' +
    configService.get('MONGO_PASWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDB');
const getMongoOptions = () => ({});
//# sourceMappingURL=Mongo.config.js.map