export interface IProduct {
    id: number;
    name: string;
    sizes: ProductSize[];
    image: string;
    description: string;
    price: string;
    special: string;
    specialInCents: number;
    priceInCents: number;
}

export enum ProductSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}