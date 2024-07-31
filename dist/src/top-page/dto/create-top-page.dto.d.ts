import { TopLevelCategiry } from '../top-page.model/top-page.model';
export declare class HhDataDto {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
export declare class TopPageAdvantageDto {
    title: string;
    description: string;
}
export declare class CreateTopPage {
    firstLevelCategory: TopLevelCategiry;
    secondCategory: string;
    title: string;
    alias: string;
    category: string;
    hh?: HhDataDto;
    advantages: TopPageAdvantageDto[];
    seoText: string;
    tagsTitle?: string;
    tags: string[];
}
