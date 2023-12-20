import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { testState } from "../../store/atoms";
import { TestHeader } from "../../components";
import {
  Background,
  Container,
  MainImage,
  Image,
  Text,
  TextWrapper,
} from "./styled";
import loading from "../../assets/images/loading.png";
import circle from "../../assets/images/circle.png";

const ResultLoading = () => {
  const testStateValue = useRecoilValue(testState);
  const values = `${testStateValue.T}${testStateValue.F}${testStateValue.E}${testStateValue.I}${testStateValue.X}${testStateValue.O}`;
  console.log(values);

  const navigate = useNavigate();

  useEffect(() => {
    const routeMap = {
      303030: "/one",
      212121: "/one",
      "031203": "/two",
      120312: "/two",
      "030330": "/three",
      121221: "/three",
      "033030": "/four",
      122121: "/four",
      301203: "/five",
      210312: "/five",
      300330: "/six",
      211221: "/six",
      "032103": "/seven",
      123012: "/seven",
      302103: "/eight",
      213012: "/eight",
    };

    const route = routeMap[values];

    setTimeout(() => {
      navigate(route);
    }, 2000);
  }, [navigate, values]);

  return (
    <>
      <Background />
      <TestHeader />
      <Container>
        <MainImage src={loading} alt="loading" />
        <TextWrapper>
          <Image src={circle} alt="circle" />
          <Text>&nbsp;결과를 기다리는 중입니다.&nbsp;</Text>
          <Image src={circle} alt="circle" />
        </TextWrapper>
      </Container>
    </>
  );
};

export default ResultLoading;
