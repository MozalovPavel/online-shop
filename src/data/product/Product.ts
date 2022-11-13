export interface IProduct {
    id: number;
    title: string;
    sizes: ProductCardSizes[];
    oldPrice: number;
    newPrice: number;
}

export enum ProductCardSizes {
    Small = "Small",
    Medium = "Medium",
    Big = "Big"
}