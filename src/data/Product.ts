export interface IProduct {
    id: number;
    name: string;
    sizes: ProductSize[];
    image: string;
    description: string;
    price: number;
    special: number;
}

export enum ProductSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}