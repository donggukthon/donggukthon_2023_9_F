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
      <Button>Snow Village 구경하기</Button>
      <Button>눈사람 정보 확인하기</Button>
      <Button>따듯한 눈 확인하기</Button>
      <Button>로그아웃</Button>
      <Button>로그인 후 이용가능합니다.</Button>

      <FooterImage src={snowman} alt="snowman" />
    </MenuContainer>
  );
};

export default SideMenu;
