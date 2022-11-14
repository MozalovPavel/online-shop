import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IPaginatable } from '../../data/Paginatable';
import { IProduct } from '../../data/Product';
import axios from 'axios';
import { productApi } from '../../api/ProductApi';
import { IProductOrder } from '../../data/ProductOrder';

enum Actions {
    ADD_TO_CART = "cart/ADD_TO_CART"
}

// FIXME кавычки поправь

export const addOrderToCart = createAction<IProductOrder>(Actions.ADD_TO_CART);