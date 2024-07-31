import { TopLevelCategiry, TopPageModel } from './top-page.model/top-page.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTopPage } from './dto/create-top-page.dto';
export declare class TopPageService {
    private readonly topPageModel;
    constructor(topPageModel: ModelType<TopPageModel>);
    create(dto: CreateTopPage): Promise<CreateTopPage>;
    findById(id: string): Promise<CreateTopPage>;
    findByAlias(alias: string): Promise<CreateTopPage>;
    deleteById(id: string): Promise<CreateTopPage>;
    updateById(id: string, dto: CreateTopPage): Promise<CreateTopPage>;
    findByCategory(firstLevelCategory: TopLevelCategiry): Promise<CreateTopPage[]>;
    findByText(texts: string): Promise<CreateTopPage[]>;
}
