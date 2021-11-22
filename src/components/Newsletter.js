import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";

const Container = styled.div`
  height: 60vh;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px soliud lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background-color: gray;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates on your favorite products!</Description>
      <InputContainer>
        <Input placeholder={"your email"} />
        <Button>
          <IoSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;