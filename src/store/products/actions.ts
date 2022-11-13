import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPaginatable } from '../../data/Paginatable';
import { IProduct } from '../../data/product/Product';
import axios from 'axios';

enum Actions {
    GET_PRODUCTS = "products/GET_PRODUCTS"
}

// FIXME кавычки поправь

export const getProducts = createAsyncThunk(Actions.GET_PRODUCTS, async (page: number = 1): Promise<IPaginatable<IProduct>> => {
  const response = await axios.get(`http://localhost:3000/product?page=${page}`);
  
  return {
    items: response.data.data,
    page,
    totalPages: response.data.pageCount 
  };
});