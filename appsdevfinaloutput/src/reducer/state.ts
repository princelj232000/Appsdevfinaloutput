import { Product } from "../models";

export type ShopState = {
    products: Product[],
    wishes: Product[],
    total: number,
    addToCart: any,
    removeFromCart: any,
    addToWish: any,
    removeFromWish: any,
    increaseOrder: any,
    decreaseOrder: any
}

export const initialState = {
    products: [],
    wishes: [],
    total: 0,
    addToCart: null,
    removeFromCart: null,
    addToWish: null,
    removeFromWish: null,
    increaseOrder: null,
    decreaseOrder: null,
}