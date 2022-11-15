import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const useOrders = () => (
    useAppSelector((state: RootState) => state.orders.orders)
);