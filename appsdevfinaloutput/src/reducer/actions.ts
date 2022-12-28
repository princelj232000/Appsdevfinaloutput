import { Product } from "../models/product";

export enum ShopActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    ADD_WISH = 'add wish',
    REMOVE_WISH = 'remove wish',
    INCREASE_QUANTITY = 'increase quantity',
    DECREASE_QUANTITY = 'decrease quantity',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });

  export const addWish = (product: Product): ShopAction => ({
    type: ShopActionType.ADD_WISH,
    payload: product,
  });
  
  export const removeWish = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE_WISH,
    payload: product,
  });

  export const increaseQuantity = (product: Product): ShopAction => ({
    type: ShopActionType.INCREASE_QUANTITY,
    payload: product,
  });

  export const decreaseQuantity = (product: Product): ShopAction => ({
    type: ShopActionType.DECREASE_QUANTITY,
    payload: product,
  });