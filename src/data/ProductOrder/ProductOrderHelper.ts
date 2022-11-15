import { getRenderKey } from "../../helpers/getRenderKey";
import { IProduct, ProductSize } from "../Product";
import { IProductOrder } from "./ProductOrder";

export class ProductOrderPipe {
    static fromProduct = (product: IProduct, size: ProductSize): IProductOrder => {
        const {id, name, specialInCents} = product;
        return {productId: id, size, name, specialInCents, orderId: getRenderKey()};
    }; 
}