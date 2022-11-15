import { createReducer } from '@reduxjs/toolkit';
import { IProductOrder } from '../../data/ProductOrder/ProductOrder';
import { addOrder, cleanOrders, removeOrder } from './actions';

export interface IOrdersState {
  orders: IProductOrder[];
};

const initialState: IOrdersState = {
  orders: []
};

export const ordersReducer = createReducer(initialState, builder => {
  builder
    .addCase(addOrder, (state, action) => (
      { ...state, orders: [...state.orders, action.payload] }
    ))
    .addCase(removeOrder, (state, action) => (
      { ...state, orders: state.orders.filter(order => order.orderId !== action.payload) }
    ))
    .addCase(cleanOrders, state => (
      { ...state, orders: [] }
    ));
});

export default ordersReducer;