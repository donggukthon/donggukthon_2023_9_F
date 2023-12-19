import { BoxLarge, ColorBox, Tag } from "../../components";
import {
  ButtonsCtaSecondary1,
  ButtonsCtaSecondary,
  Div1,
  Child,
  Div2,
  Div,
  Dotline,
  Div3,
  Li,
  Li2,
  Ul,
  B,
  Div4,
  P,
  Div5,
  WarningIcon,
  Div6,
  B1,
  ButtonsCtaSecondary2,
  Testresult1Child,
  Testresult1Item,
  SnowmanVillageContainer,
  WrapperGroup406Child,
  WrapperGroup406,
  Icon,
  Icon1,
  Testresult1Inner,
  ButtonsCtaSecondary4,
  ButtonsCtaSecondary6,
  ButtonsCtaSecondary8,
  Testresult1Root,
  CircleLeft1,
  CircleLeft2,
  CircleLeft3,
} from "./styled";

export const TestResult6 = () => {
  return (
    <Testresult1Root>
      <Div>
        <ButtonsCtaSecondary>
          <ButtonsCtaSecondary1 />
        </ButtonsCtaSecondary>
        <Div1>메인페이지로 돌아가기</Div1>
        <Child />
        <Div2>테스트 결과지</Div2>
      </Div>
      <Dotline />
      <BoxLarge propTop="480px" boxColor="#96ACB4" />
      <BoxLarge propTop="736px" boxColor="#96ACB4" />
      <Tag description="#겉바속바 " propLeft="65px" />
      <Tag description="#쿨하고차갑" propLeft="154px" />
      <Tag description="#거리감있는" propLeft="243px" />
      <Div3>날이 선 얼음 덩어리형</Div3>
      <B>
        <Ul>
          <Li>
            `겉으로는 차가운 얼음덩어리처럼 보이며, 속으로도 감정을 쉽게
            드러내지 않는 눈사람입니다. `
          </Li>
          <Li>
            `무관심한 표정과 거리를 두는 태도로 주변에 일정한 거리를 유지하며,
            감정을 표현하는 것을 꺼리는 편입니다.`
          </Li>
          <Li2>
            이성친구들에게는 쿨한 친구로 인식되지만, 간혹 마음을 터놓을 수 있는
            이성친구가 생기면, 그 안에 감춰진 따뜻한 마음을 알아채게 될 수도
            있어요!
          </Li2>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>{`다만, 주변에서 자신의 무관심을 오해할 수 있으니, `}</P>
        <P>적절한 시기에 감정을 표현하는 연습이 필요할 수 있어요.</P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#84A7B8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#84A7B8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#84A7B8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#84A7B8"
      />
      <Div6>눈송이의 벙어리장갑형</Div6>
      <ButtonsCtaSecondary2>
        <ButtonsCtaSecondary1 />
        <B1>설명 읽기</B1>
      </ButtonsCtaSecondary2>
      <Testresult1Child />
      <Testresult1Item />
      <SnowmanVillageContainer>
        <P>{`SnowMan Village에서는 나만의 눈사람을 등록하고,  `}</P>
        <P>8가지 유형의 다양한 눈사람을 둘러볼 수 있어요!</P>
      </SnowmanVillageContainer>
      <WrapperGroup406>
        <WrapperGroup406Child alt="" src="/group-406@2x.png" />
      </WrapperGroup406>
      <Icon alt="" src="/얼음1.png" />
      <Icon1 alt="" src="/벙어리.png" />
      <Testresult1Inner />
      <CircleLeft1 alt="" src="ellipse-2@2x.png" />
      <CircleLeft2 alt="" src="ellipse-6@2x.png" />
      <CircleLeft3 alt="" src="ellipse-2@2x.png" />

      <ButtonsCtaSecondary4>
        <ButtonsCtaSecondary1 />
        <B1>눈사람 등록</B1>
      </ButtonsCtaSecondary4>
      <ButtonsCtaSecondary6>
        <ButtonsCtaSecondary1 />
        <B1>ReTest</B1>
      </ButtonsCtaSecondary6>
      <ButtonsCtaSecondary8>
        <ButtonsCtaSecondary1 />
        <B1>SNS에 결과 공유</B1>
      </ButtonsCtaSecondary8>
    </Testresult1Root>
  );
};
