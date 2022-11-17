import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPaginatable } from '../../data/Paginatable';
import { IProduct } from '../../data/Product';
import { productApi } from '../../api/ProductApi';

enum Actions {
  GET_PRODUCTS = "products/GET_PRODUCTS"
}

export const getProducts = createAsyncThunk(Actions.GET_PRODUCTS, async (page: number = 1): Promise<IPaginatable<IProduct>> => {
  const response = await productApi.getProducts(page);

  return {
    items: response.data.data,
    page,
    totalPages: response.data.pageCount
  };
});