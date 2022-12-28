import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    WishButton,
    Wrapper,
  } from "./ProductCard.styled";
  
  import { useState, useEffect, useContext } from "react";
  import { Product } from "../../models";
  import { ShopContext } from "../../context";
  import { FaRegStar, FaStar } from "react-icons/fa";
  
  export const ProductCard = ({ name, imageUrl, price, quantity }: Product) => {
    const { products, wishes, addToCart, removeFromCart, addToWish, removeFromWish } =
      useContext(ShopContext);
    const [isInCart, setIsInCart] = useState(false);
    const [isInList, setIsInList] = useState(false);
    
  
    useEffect(() => {
      const productIsInCart = products.find((product) => product.name === name);
  
      if (productIsInCart) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    }, [products, name]);
  
    useEffect(() => {
      const productIsInList = wishes.find((product) => product.name === name);
  
      if (productIsInList) {
        setIsInList(true);
      } else {
        setIsInList(false);
      }
    }, [wishes, name]);
  
    const handleClick = () => {
      const product = { name, imageUrl, price, quantity };
      if (isInCart) {
        removeFromCart(product);
        setIsInCart(false);
      } else {
        addToCart(product);
        setIsInCart(true);
      }
    };
    
    const handleList = () => {
      const product = { name, imageUrl, price };
      if (isInList) {
        removeFromWish(product);
        setIsInList(false);
      } else {
        addToWish(product);
        setIsInList(true);
      }
    };
    return (
      <Wrapper background={imageUrl}>
        <AddButton isInCart={isInCart} onClick={handleClick}>
          <p>{isInCart ? "-" : "+"}</p>
        </AddButton>
        <WishButton isInList={isInList} onClick={handleList}>
          <p>{isInList ? <FaStar /> : <FaRegStar />}</p>
        </WishButton>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>{price}.00$</SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };