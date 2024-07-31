import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: ModelType<ProductModel>);
    create(dto: CreateProductDto): Promise<ProductModel>;
    findById(id: string): Promise<ProductModel>;
    deleteById(id: string): Promise<ProductModel>;
    updateById(id: string, dto: CreateProductDto): Promise<ProductModel>;
    findWithReview(dto: FindProductDto): Promise<ProductModel[]>;
}
