import { ProductSize } from "../Product";

export interface IProductOrder {
    productId: number;
    size: ProductSize;
    // Нужны только id и size, остальные добавил т.к. у тестового сервера нет метода получения products
    name: string;
    specialInCents: number;
    orderId: number;
}