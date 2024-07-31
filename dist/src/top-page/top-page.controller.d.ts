import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
import { CreateTopPage } from './dto/create-top-page.dto';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPage): Promise<CreateTopPage>;
    get(id: string): Promise<CreateTopPage>;
    getByAlias(alias: string): Promise<CreateTopPage>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPage): Promise<CreateTopPage>;
    find(dto: FindTopPageDto): Promise<CreateTopPage[]>;
    textSearch(text: string): Promise<CreateTopPage[]>;
}
