import { createReducer } from '@reduxjs/toolkit';
import { IProductOrder } from '../../data/ProductOrder';
import { addOrderToCart } from './actions';

export type CartState = {
  orders: IProductOrder[];
};

const initialState: CartState = {
  orders: []
};

export const cartReducer = createReducer(initialState, builder => {
  builder
    .addCase(addOrderToCart, (state, action) => (
      { ...state, orders: [...state.orders, action.payload] }
    ));
});

export default cartReducer;