import axios, { AxiosResponse } from "axios";
import { IProduct } from "../data/Product";
import { BaseApi, PaginatableResponse } from "./BaseApi";

class ProductApi extends BaseApi {
    async getProducts(page: number = 1): Promise<PaginatableResponse<IProduct>> {
        return await axios.get(`${this.url}?page=${page}`);
    };

    async getProduct(id: string): Promise<AxiosResponse<IProduct>> {
        return await axios.get(`${this.url}/${id}`);
    } 
}

export const productApi = new ProductApi("product")
