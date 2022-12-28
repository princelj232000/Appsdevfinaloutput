import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ShopContext } from "../../context";
import { useReducer } from "react";
import {
  add,
  addWish,
  decreaseQuantity,
  increaseQuantity,
  initialState,
  remove,
  removeWish,
  shopReducer,
  update,
} from "../../reducer";
import { Product } from "../../models";
import { WishList } from "../WishList/WishList";
import { CheckOut } from "../CheckOut";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
  };

  const addToWish = (product: Product) => {
    const updatedList = state.wishes.concat(product);

    dispatch(addWish(updatedList));
  };

  const removeFromWish = (product: Product) => {
    const updatedList = state.wishes.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch(removeWish(updatedList));
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach(
      (product: { price: number; quantity: number }) =>
        (total += product.price * product.quantity)
    );

    dispatch(update(total));
  };

  const increaseOrder = (product: Product) => {
    const updatedList = state.products.map((currentProduct: Product) => {
      if (currentProduct.name === product.name) {
        return {
          ...currentProduct,
          quantity: currentProduct.quantity + 1,
        };
      }
      return currentProduct;
    });

    updatePrice(updatedList);
    dispatch(increaseQuantity(updatedList));
  };

  const decreaseOrder = (product: Product) => {
    const updatedList = state.products.map((currentProduct: Product) => {
      if (currentProduct.name === product.name) {
        return {
          ...currentProduct,
          quantity: currentProduct.quantity - 1,
        };
      }
      return currentProduct;
    });

    updatePrice(updatedList);
    dispatch(decreaseQuantity(updatedList));
  };
  const value = {
    total: state.total,
    products: state.products,
    wishes: state.wishes,
    addToCart,
    removeFromCart,
    addToWish,
    removeFromWish,
    increaseOrder,
    decreaseOrder,
  };
  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wish">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};