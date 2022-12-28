import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const CheckoutButton = styled.button`
background-color: #6633FF;
justify-content: center;
align-items: center;
top: 20px;
right: 20px;
width: 500px;
height: 40px;
padding: 5px;
cursor: pointer;

p {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: white;
}
`;