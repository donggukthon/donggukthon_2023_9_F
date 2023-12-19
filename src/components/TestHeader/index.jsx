import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, BackButton, Logo } from "./styled";
import back from "../../assets/images/back.png";
import logo from "../../assets/images/test_header_logo.png";

const TestHeader = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <BackButton
        src={back}
        alt="Back Button"
        onClick={handleBackButtonClick}
      />
      <Logo src={logo} alt="Logo" />
    </Container>
  );
};

export default TestHeader;
