import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { axiosInstance } from "../../apis";
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

  const getResult = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/test-result?result=${values}`,
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

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
