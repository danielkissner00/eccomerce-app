import React from "react";
import styled from "styled-components";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMap,
  IoPhonePortrait,
  IoMailSharp,
} from "react-icons/io5";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GLIZY</Logo>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Description>
        <SocialContainer>
          <SocialIcon color="pink">
            <IoLogoFacebook />
          </SocialIcon>
          <SocialIcon color="teal">
            <IoLogoInstagram />
          </SocialIcon>
          <SocialIcon color="lightblue">
            <IoLogoTwitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <IoMap style={{ marginRight: "10px" }} />
          Adress
        </ContactItem>
        <ContactItem>
          <IoPhonePortrait style={{ marginRight: "10px" }} />
          Number
        </ContactItem>
        <ContactItem>
          <IoMailSharp style={{ marginRight: "10px" }} />
          Email
        </ContactItem>
        <Payment
          src={
            "https://dor.georgia.gov/sites/dor.georgia.gov/files/styles/flexheight/public/ccard-logos-set.png?itok=uWshcsAR"
          }
        />
      </Right>
    </Container>
  );
};

export default Footer;
