export interface IProduct {
    id: number;
    name: string;
    sizes: ProductCardSizes[];
    image: string;
    description: string;
    price: number;
    special: number;
}

export enum ProductCardSizes {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}