import { createContext } from "react";
import { ShopState, initialState } from "../reducer";

export const ShopContext = createContext<ShopState>(initialState);