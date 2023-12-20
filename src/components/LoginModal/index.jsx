import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  GoogleButton,
  KakaoButton,
  NonmemberButton,
} from "./styled";
import google from "../../assets/images/google.png";
import kakao from "../../assets/images/kakao.png";

const LoginModal = () => {
  const REST_API_KEY = process.env.REST_API_KEY;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const kakaoURL = `https://noonsachin.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();

  const handleNonmemberButtonClick = () => {
    navigate("/test/0");
  };

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Container>
      <GoogleButton>
        <img src={google} alt="google" />
        &nbsp;Google 계정으로 로그인
      </GoogleButton>
      <KakaoButton onClick={handleKakaoLogin}>
        <img src={kakao} alt="kakao" />
        &nbsp;카카오톡으로 로그인
      </KakaoButton>
      <NonmemberButton onClick={handleNonmemberButtonClick}>
        &nbsp;비회원으로 테스트 하기&nbsp;
      </NonmemberButton>
    </Container>
  );
};

export default LoginModal;
