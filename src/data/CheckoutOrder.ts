import { ProductSize } from "./Product";

export interface ICheckoutOrder {
    id: number; 
    size: ProductSize;
}