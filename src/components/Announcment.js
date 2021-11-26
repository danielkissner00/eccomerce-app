import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ padding: "10px" })}
`;

const Announcement = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default Announcement;
