import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
