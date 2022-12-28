import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };

    case ShopActionType.ADD_WISH:
      return {
        ...state,
        wishes: action.payload,
      };

    case ShopActionType.REMOVE_WISH:
      return {
        ...state,
        wishes: action.payload,
      };

    case ShopActionType.INCREASE_QUANTITY:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.DECREASE_QUANTITY:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};