import React from "react";
import { Container, BackButton, Logo } from "./styled";
import back from "../../assets/images/back.png";
import logo from "../../assets/images/test_header_logo.png";

const TestHeader = () => {
  return (
    <Container>
      <BackButton src={back} alt="Back Button" />
      <Logo src={logo} alt="Logo" />
    </Container>
  );
};

export default TestHeader;
