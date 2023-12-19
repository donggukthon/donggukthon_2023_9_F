import React from "react";
import {
  MenuContainer,
  Header,
  Image,
  FooterImage,
  Button,
  Close,
} from "./styled";
import snow from "../../assets/images/sidesnow.png";
import snowman from "../../assets/images/sidesnowman.png";

const SideMenu = ({ onClose }) => {
  return (
    <MenuContainer>
      <Close onClick={onClose}>X</Close>
      <Header>
        <Image src={snow} alt="snow" />
        눈사친
        <Image src={snow} alt="snow" />
      </Header>
      <Button>따듯한 눈</Button>
      <FooterImage src={snowman} alt="snowman" />
    </MenuContainer>
  );
};

export default SideMenu;
