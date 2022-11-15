import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductOrder } from '../../data/ProductOrder/ProductOrder';

enum Actions {
    ADD_ORDER = "orders/ADD_ORDER",
    REMOVE_ORDER = "orders/REMOVE_ORDER",
}

// FIXME кавычки поправь

export const addOrder = createAction<IProductOrder>(Actions.ADD_ORDER);
export const removeOrder = createAction<number>(Actions.REMOVE_ORDER);