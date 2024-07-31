import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
declare class ProductCharacteristic {
    name: string;
    value: string;
}
export interface ProductModel extends Base {
}
export declare class ProductModel extends TimeStamps {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    credit: number;
    description: string;
    advanteges: string;
    disAdvanteges: string;
    categories: string[];
    tags: string[];
    characteristics: ProductCharacteristic[];
}
export {};
