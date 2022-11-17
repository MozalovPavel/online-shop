import { getRenderKey } from "../../helpers/getRenderKey";
import { ICheckoutOrder } from "../CheckoutOrder";
import { IProduct, ProductSize } from "../Product";
import { IProductOrder } from "./ProductOrder";

export class ProductOrderPipe {
    static fromProduct = (product: IProduct, size: ProductSize): IProductOrder => {
        const {id, name, specialInCents} = product;
        return {productId: id, size, name, specialInCents, orderId: getRenderKey()};
    }; 

    static toCheckoutOrders = ({size, productId}: IProductOrder): ICheckoutOrder => ({
        id: productId, size
    });
}