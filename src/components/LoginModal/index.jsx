import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const handleNonmemberButtonClick = () => {
    navigate("/test/0");
  };

  const handleLogin = provider => {
    window.location.href = `https://www.noonsachin.com/oauth2/authorization/${provider}`;
  };

  useEffect(() => {
    // Parse the URL to get the JWT
    const jwt = new URL(window.location.href).searchParams.get("jwt");
    console.log(jwt);
    if (jwt) {
      // If JWT exists, set it in the headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      // Redirect to the home screen
      navigate("/");
    }
  }, [navigate, location.search]);

  return (
    <Container>
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
    </Container>
  );
};

export default LoginModal;
