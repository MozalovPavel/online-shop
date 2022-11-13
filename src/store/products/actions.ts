import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPaginatable } from '../../data/Paginatable';
import { IProduct, ProductCardSizes } from '../../data/product/Product';
// import axios from 'axios';

enum Actions {
    GET_PRODUCTS = "products/GET_PRODUCTS"
}

// FIXME кавычки поправь

const products: IProduct[] = [
    {
        title: "Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 1
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 2
    },
    {
        title: "Kirsten Sequin Open Back Long",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 3
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue dasd asd asd asd asd asd asd ",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 4
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 5
    },
];

export const getProducts = createAsyncThunk(Actions.GET_PRODUCTS, async (page: number = 1): Promise<IPaginatable<IProduct>> => {
  return Promise.resolve({
    items: products,
    page,
    totalPages: 10
  });
});