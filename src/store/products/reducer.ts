import { createReducer } from "@reduxjs/toolkit";
import { IPaginatable } from "../../data/Paginatable";
import { IProduct } from "../../data/Product";
import { getProducts } from "./actions";

export type ProductsState = {
  data?: IPaginatable<IProduct>;
  pending: boolean;
  error: boolean;
};

const initialState: ProductsState = {
  pending: false,
  error: false,
};

export const productsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getProducts.pending, state => ({ ...state, pending: true }))
    .addCase(getProducts.fulfilled, (state, { payload }) => ({
      ...state,
      pending: false,
      data: payload
    }))
    .addCase(getProducts.rejected, state => ({
      ...state,
      pending: false,
      error: true
    }));
});

export default productsReducer;