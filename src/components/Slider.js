import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { slideItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: rgb(237, 237, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  height: 80%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (slideIndex === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdKeyboardArrowLeft />
      </Arrow>

      <Wrapper>
        {slideItems.map((slide) => {
          return (
            <Slide bg={slide.bg} slideIndex={slideIndex} key={slide.id}>
              <ImgContainer>
                <Image src={slide.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdKeyboardArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
