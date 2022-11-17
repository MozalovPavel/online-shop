import { createReducer } from '@reduxjs/toolkit';
import { createOrder } from './actions';

export interface ICheckoutState {
  pending: boolean;
  error: boolean;
};

const initialState: ICheckoutState = {
  pending: false,
  error: false,
};

export const checkoutReducer = createReducer(initialState, builder => {
  builder
    .addCase(createOrder.pending, state => ({ ...state, pending: true }))
    .addCase(createOrder.fulfilled, state => ({
      ...state,
      pending: false
    }))
    .addCase(createOrder.rejected, state => ({
      ...state,
      pending: false,
      error: true
    }));
});

export default checkoutReducer;