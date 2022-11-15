import axios, { AxiosResponse } from "axios";
import { ICheckoutOrder } from "../data/CheckoutOrder";
import { BaseApi } from "./BaseApi";

interface ICreateOrderResponse {
    orderId: string;
}

export class CheckoutApi extends BaseApi {
    async createOrder(products: ICheckoutOrder[]): Promise<AxiosResponse<ICreateOrderResponse>> {
        return await axios.post(`${this.url}/placeOrder`, {products});
    } 
}

export const checkoutApi = new CheckoutApi("checkout");