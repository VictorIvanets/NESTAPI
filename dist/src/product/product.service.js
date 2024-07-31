"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const product_model_1 = require("./product.model");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(dto) {
        return this.productModel.create(dto);
    }
    async findById(id) {
        return this.productModel.findById(id).exec();
    }
    async deleteById(id) {
        return this.productModel.findByIdAndDelete(id).exec();
    }
    async updateById(id, dto) {
        return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findWithReview(dto) {
        return this.productModel
            .aggregate([
            {
                $match: {
                    categories: dto.category,
                },
            },
            {
                $sort: {
                    _id: 1,
                },
            },
            {
                $limit: dto.limit,
            },
            {
                $lookup: {
                    as: 'review',
                    from: 'Review',
                    localField: '_id',
                    foreignField: 'productId',
                },
            },
            {
                $addFields: {
                    reviewCount: { $size: '$review' },
                    reviewAvg: { $avg: '$review.rating' },
                    review: {
                        $function: {
                            body: `function (review) {
									review.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
									return review
								}`,
                            args: ['$review'],
                            lang: 'js',
                        },
                    },
                },
            },
        ])
            .exec();
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(product_model_1.ProductModel)),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=product.service.js.map