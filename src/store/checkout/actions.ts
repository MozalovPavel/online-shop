import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkoutApi } from '../../api/CheckoutApi';
import { ICheckoutOrder } from '../../data/CheckoutOrder';

enum Actions {
    CREATE_ORDER = "checkout/CREATE_ORDER",
}

// FIXME кавычки поправь

export const createOrder = createAsyncThunk(Actions.CREATE_ORDER, async (orders: ICheckoutOrder[]): Promise<string> => {
    const response = await checkoutApi.createOrder(orders);
    return response.data.orderId;
});