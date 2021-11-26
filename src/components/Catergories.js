import React from "react";
import styled from "styled-components";
import { catergories } from "../data";
import CatergoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Categories = () => {
  return (
    <Container>
      {catergories.map((item) => {
        return (
          <CatergoryItem key={item.id} img={item.img} title={item.title} />
        );
      })}
    </Container>
  );
};

export default Categories;
