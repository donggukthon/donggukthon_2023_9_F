import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store/atoms";
import {
  Container,
  GoogleButton,
  KakaoButton,
  NonmemberButton,
} from "./styled";
import google from "../../assets/images/google.png";
import kakao from "../../assets/images/kakao.png";

const LoginModal = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(loginState);

  const handleNonmemberButtonClick = () => {
    navigate("/test/0");
  };

  const handleLogin = provider => {
    window.location.href = `https://www.noonsachin.com/oauth2/authorization/${provider}`;
  };

  return (
    <Container>
      {isLoggedIn ? (
        <NonmemberButton onClick={handleNonmemberButtonClick}>
          &nbsp;테스트 하기&nbsp;
        </NonmemberButton>
      ) : (
        <>
          <GoogleButton onClick={() => handleLogin("google")}>
            <img src={google} alt="google" />
            &nbsp;Google 계정으로 로그인
          </GoogleButton>
          <KakaoButton onClick={() => handleLogin("kakao")}>
            <img src={kakao} alt="kakao" />
            &nbsp;카카오톡으로 로그인
          </KakaoButton>
          <NonmemberButton onClick={handleNonmemberButtonClick}>
            &nbsp;비회원으로 테스트 하기&nbsp;
          </NonmemberButton>
        </>
      )}
    </Container>
  );
};

export default LoginModal;
