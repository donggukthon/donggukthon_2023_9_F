import {
  DivRoot,
  GoBackIcon,
  Div1,
  Icon,
  Icon1,
  WrapperGroup314,
  WrapperGroup314Child,
  Child,
  ButtonsCtaSecondary,
  ButtonsCtaSecondary1,
  RectangleParent,
  GroupChild,
  Div2,
  RectangleGroup,
  FrameChild, 
  FrameItem,
  B,
  B1,
  Sns,
  B2,
  Div3,
  Wrapper1,
  Icon2
}from "./styled"

export const Frame = () => {
  return (
    <DivRoot>
      <GoBackIcon alt="" src="/go-back@2x.png" />
      <Div1>눈사람 등록</Div1>
      <Icon alt="" src="/snow.png" />
      <Icon1 alt="" src="/snow.png" />
      <WrapperGroup314>
        <WrapperGroup314Child alt="" src="/group-406@2x.png" />
      </WrapperGroup314>
      <Child />
      <ButtonsCtaSecondary>
        <ButtonsCtaSecondary1 />
      </ButtonsCtaSecondary>
      <RectangleParent>
        <GroupChild />
        <Div2>스포티한 눈썰매형</Div2>
        <RectangleGroup>
          <FrameChild />
          <FrameItem />
        </RectangleGroup>
        <B>이름 : 땡땡이</B>
        <B1>한줄 소개 : 담요를 덮었어요</B1>
        <Sns>SNS : 공개</Sns>
        <B2>성별 : 남성</B2>
      </RectangleParent>
      <Div3>눈사람 등록하기</Div3>
      <Wrapper1>
        <Icon2 alt="" src="/-1@2x.png" />
      </Wrapper1>
    </DivRoot>
  );
};

