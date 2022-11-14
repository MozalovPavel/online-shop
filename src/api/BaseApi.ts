import { AxiosResponse } from "axios";

const API_HOST = "http://localhost:3000";

export class BaseApi {
    protected url: string;

    constructor(route: string) {
        this.url = `${API_HOST}/${route}`;
    }
}

export type PaginatableResponse<T> = AxiosResponse<{
    data: T[],
    count: number,
    total: number,
    pageCount: number,
    page: number
}>