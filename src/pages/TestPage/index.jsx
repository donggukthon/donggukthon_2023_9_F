import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { testState } from "../../store/atoms";
import buttonTexts from "./buttonTexts";
import { TestHeader, TestBox } from "../../components";
import { Background, Container, StepImage, Button } from "./styled";

const TestPage = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const [testData, setTestData] = useRecoilState(testState);
  const currentStep = parseInt(step, 10);
  const nextStep = currentStep + 1;

  const handleTopButtonClick = () => {
    if (currentStep === 0) {
      setTestData(prevData => ({
        ...prevData,
        gender: "man",
      }));
    } else if (currentStep <= 3) {
      setTestData(prevData => ({
        ...prevData,
        T: prevData.T + 1,
      }));
    } else if (currentStep <= 6) {
      setTestData(prevData => ({
        ...prevData,
        E: prevData.E + 1,
      }));
    } else if (currentStep <= 9) {
      setTestData(prevData => ({
        ...prevData,
        X: prevData.X + 1,
      }));
    }

    if (nextStep <= 9) {
      navigate(`/test/${nextStep}`);
    } else {
      navigate("/result");
    }
  };

  const handleBottomButtonClick = () => {
    if (currentStep === 0) {
      setTestData(prevData => ({
        ...prevData,
        gender: "women",
      }));
    } else if (currentStep <= 3) {
      setTestData(prevData => ({
        ...prevData,
        F: prevData.F + 1,
      }));
    } else if (currentStep <= 6) {
      setTestData(prevData => ({
        ...prevData,
        I: prevData.I + 1,
      }));
    } else if (currentStep <= 9) {
      setTestData(prevData => ({
        ...prevData,
        O: prevData.O + 1,
      }));
    }

    if (nextStep <= 9) {
      navigate(`/test/${nextStep}`);
    } else {
      navigate("/result");
    }
  };

  console.log(testData);

  return (
    <>
      <Background />
      <TestHeader />
      <StepImage
        src={require(`../../assets/images/step_${step}.png`)}
        alt="snowflake"
      />
      <Container>
        <TestBox step={step} />
        <Button onClick={handleTopButtonClick}>
          {buttonTexts[currentStep].top}
        </Button>
        <Button onClick={handleBottomButtonClick}>
          {buttonTexts[currentStep].bottom}
        </Button>
      </Container>
    </>
  );
};

export default TestPage;
