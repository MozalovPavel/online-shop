export enum PagesRoutes {
    Root = "/",
    Product = "/product",
    Cart = "/cart"
}

export class PagesRoutesHelper {
    static getProductRoute = (id: number) => `${PagesRoutes.Product}/${id}`;
}