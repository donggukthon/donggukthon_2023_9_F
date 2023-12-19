import React from "react";
import { useRecoilValue } from "recoil";
import { testState } from "../../store/atoms";
import { Container, Text, Image } from "./styled";

const TestBox = ({ step }) => {
  const getTextByStep = () => {
    const gender = useRecoilValue(testState).gender;

    switch (step) {
      case "0":
        return <>본인의 성별을 선택해주세요</>;
      case "1":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 전 날 밤에 <br /> 직접
            만든 눈사람이 <br /> 낮에 녹아서 속상해한다.
            <br />
            이때 나의 답변은?
          </>
        );
      case "2":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 내일 삿포로에 가서
            <br /> 첫 눈을 보고싶다고 한다.
            <br /> 이때 나의 답변은?
          </>
        );
      case "3":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 붕어빵을 굽다가
            <br /> 손이 데였다고 한다.
            <br />
            이때 나의 답변은?
          </>
        );
      case "4":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 동아리 <br />
            종강 총회 뒷풀이를 <br />갈 것이냐고 묻는다. <br />
            이때 나의 답변은?
          </>
        );
      case "5":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 크리스마스 다음 날에
            <br /> 친구들과 다함께 <br />
            파티룸에서 놀자고한다.
            <br />
            이때 나의 답변은?
          </>
        );
      case "6":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 새해 기념 집들이를
            <br /> 하려고 하는데 친구들을 <br />
            어느정도 부를 지 묻는다. <br />
            이때 나의 답변은?
          </>
        );
      case "7":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 술을 마시다가
            <br /> 취했다고 연락이 왔다.
            <br /> 이때 나의 답변은?
          </>
        );
      case "8":
        return (
          <>
            단지 이성으로서가 아닌,
            <br />
            친구로서의 호감이 있어
            <br /> 친하게 지낸 {gender === "man" ? "여사친" : "남사친"}이
            <br />한 때 나를 좋아했다고 말한다.
            <br /> 이때 나의 생각은?
          </>
        );
      case "9":
        return (
          <>
            {gender === "man" ? "여사친" : "남사친"}이 개인톡으로
            <br /> 밖에 눈이 쌓였다고 말해준다.
            <br /> 이때 나의 생각은?
          </>
        );
      default:
        return "잘못된 접근입니다.";
    }
  };

  return (
    <Container>
      <Text>{getTextByStep()}</Text>
      <Image src={require(`../../assets/images/test_${step}.png`)} alt="img" />
    </Container>
  );
};

export default TestBox;
