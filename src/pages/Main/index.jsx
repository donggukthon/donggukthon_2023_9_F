import React, { useState } from "react";
import { SnowAnimation, SideMenu, LoginModal } from "../../components";
import {
  Background,
  MainImage,
  SnowmanImage,
  MainLogo,
  StartButton,
  Container,
  MenuImage,
  Text,
} from "./styled";
import main from "../../assets/images/main.png";
import logo from "../../assets/images/main_logo.png";
import snowman from "../../assets/images/snowman.png";
import menu from "../../assets/images/menu.png";

const Main = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleStartButtonClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <Background />
      <SnowAnimation />
      <MenuImage src={menu} alt="menu" onClick={handleMenuClick} />
      <Text>나는 이성 친구들에게 어떤 유형의 눈사람일까?</Text>
      <MainLogo src={logo} alt="logo" />
      <MainImage src={main} alt="main" />
      <SnowmanImage src={snowman} alt="snowman" />
      <Container>
        <StartButton onClick={handleStartButtonClick}>
          서비스 시작하기
        </StartButton>
      </Container>
      {isMenuVisible && <SideMenu onClose={handleMenuClick} />}
      {isLoginVisible && <LoginModal />}
    </>
  );
};

export default Main;
