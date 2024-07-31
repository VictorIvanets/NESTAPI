import { ReviewModel } from './review.model/review.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create.review.dto';
export declare class ReviewService {
    private readonly reviewModel;
    constructor(reviewModel: ModelType<ReviewModel>);
    create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>>;
    delete(id: string): Promise<DocumentType<ReviewModel> | null>;
    findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]>;
    deleteByProductId(productId: string): Promise<unknown>;
}
