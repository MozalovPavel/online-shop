import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const useProducts = () => (
    useAppSelector((state: RootState) => state.products)
);
