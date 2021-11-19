import { MenuItem } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillHeart,
} from "react-icons/ai";

const Container = styled.div`
  flex: 1;
  margin: 5;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fafc;
  margin: 10px;
  position: relative;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: white;
  position: absolute;
  z-index: -1;
`;

const Image = styled.img`
  height: 70%;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5fafc;
    transform: scale(1.1);
  }
`;

const Product = ({ img }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <AiFillHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
