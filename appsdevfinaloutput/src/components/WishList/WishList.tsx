import { useContext } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models";
import { Title } from "../Cart";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper } from "./WishList.styled";

export const WishList = () => {
  const { wishes } = useContext(ShopContext);
  return (
    <>
    <Title>Items in your wishlist</Title>
      <ProductsWrapper>
        {wishes.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};