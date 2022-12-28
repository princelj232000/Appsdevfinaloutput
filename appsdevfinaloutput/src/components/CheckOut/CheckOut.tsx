import { useContext } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models/product";
import { Title } from "../Cart";
import {
  Cell,
  CheckOutHeader,
  CheckOutInput,
  CheckOutLabel,
  CheckOutTable,
  ItemWrapper,
  OrderButton,
} from "./CheckOut.styled";

export const CheckOut = () => {
  const { products, total } = useContext(ShopContext);

  return (
    <>
      <Title>Basic Information</Title>
      <div>
        <CheckOutLabel>First Name</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
        <CheckOutLabel>Last Name</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
      </div>
      <div>
        <CheckOutLabel>Phone Number</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
        <CheckOutLabel>Email Address</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
      </div>
      <div>
        <CheckOutLabel>Full Address</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
        <CheckOutLabel>City</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
        <CheckOutLabel>Zip Code</CheckOutLabel>
        <CheckOutInput></CheckOutInput>
      </div>
      <CheckOutTable>
        <thead>
          <tr>
            <CheckOutHeader>Item</CheckOutHeader>
            <CheckOutHeader>Name</CheckOutHeader>
            <CheckOutHeader>Price</CheckOutHeader>
            <CheckOutHeader>Quantity</CheckOutHeader>
            <CheckOutHeader>Total</CheckOutHeader>
          </tr>
        </thead>
        {products.map((product: Product, index) => (
          <tbody key={index}>
            <tr>
              <Cell>
                <ItemWrapper background={product.imageUrl}></ItemWrapper>
              </Cell>
              <Cell>
                <p>{product.name}</p>
              </Cell>
              <Cell>
                <p>${product.price}.00</p>
              </Cell>
              <Cell>
                <p>{product.quantity}</p>
              </Cell>
              <Cell>
                <p>{product.price * product.quantity}</p>
              </Cell>
            </tr>
          </tbody>
        ))}
      </CheckOutTable>
        <Title>
          Grand Total: ${total}.00 <OrderButton><p>Place Order</p></OrderButton>
        </Title>
    </>
  );
};