import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const useCheckoutState = () => (
    useAppSelector((state: RootState) => state.checkout)
);