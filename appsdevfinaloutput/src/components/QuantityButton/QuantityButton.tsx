import { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models";
import { Title } from "../Cart";
import { DecrementButton, IncrementButton, QuantityView } from "./QuantityButton.styled";

export const QuantityButton = ({ name, price, quantity }: Product) => {
  const { increaseOrder, decreaseOrder, removeFromCart } = useContext(ShopContext);

  const handleIncrease = () => {
    const product = { name, price, quantity };
    increaseOrder(product);
  };

  const handleDecrease = () => {
    const product = { name, price, quantity };
    if (quantity <= 1) {
      removeFromCart(product);
    } else {
      decreaseOrder(product);
    }
  };

  return (
    <div>
      <Title>Quantity:</Title>
      <IncrementButton onClick={() => handleIncrease()}><p>+</p></IncrementButton>
      <QuantityView>{quantity}</QuantityView>
      <DecrementButton onClick={() => handleDecrease()}><p>-</p></DecrementButton>
    </div>
  );
};