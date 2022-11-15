import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
    AnyAction,
    Reducer,
    CombinedState
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { checkoutReducer } from './checkout';
import { ordersReducer } from './orders';
import { productsReducer } from './products';

const reducers = {
    products: productsReducer,
    orders: ordersReducer,
    checkout: checkoutReducer
};

const combinedReducer = combineReducers(reducers);

const reducer: Reducer<ReturnType<typeof combinedReducer>, AnyAction> = (state, action) => {
    console.log({state, action});
    
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export const makeStore = () =>
    configureStore({
        reducer
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });