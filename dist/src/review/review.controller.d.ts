import { CreateReviewDto } from './dto/create.review.dto';
import { ReviewService } from './review.service';
import { ReviewModel } from './review.model/review.model';
export declare class ReviewController {
    private readonly reviewServise;
    constructor(reviewServise: ReviewService);
    create(dto: CreateReviewDto): Promise<ReviewModel>;
    getByProduct(productId: string, email: string): Promise<ReviewModel[]>;
    delete(id: string): Promise<void>;
}
