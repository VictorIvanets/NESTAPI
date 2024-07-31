import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<ProductModel>;
    get(id: string): Promise<ProductModel>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: ProductModel): Promise<ProductModel>;
    find(dto: FindProductDto): Promise<ProductModel[]>;
}
