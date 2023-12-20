import { BoxLarge, ColorBox, Tag } from "../../components";
import KakaoShareButton from '../../components/KakaoShareButton/KakaoShareButton';
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

export const TestResult3 = () => {
  return (
    <Testresult1Root>
    <Div>
      <Child />
      <Div2>테스트 결과지</Div2>
    </Div>
    <Dotline />
    <ButtonsCtaSecondary>
        <ButtonsCtaSecondary1 />
      </ButtonsCtaSecondary>
      <Div1>메인페이지로 돌아가기</Div1>
      <BoxLarge propTop="480px" boxColor="#A7C6AA" />
      <BoxLarge propTop="736px" boxColor="#A7C6AA" />
      <Tag description="#겉촉속바 " propLeft="65px" />
      <Tag description="#속을알수없 " propLeft="154px" />
      <Tag description="#미스테리" propLeft="243px" />
      <Div3>눈송이의 벙어리장갑형</Div3>
      <B>
        <Ul>
          <Li>{`속을 알기 어려운 특성으로 찬구들에게는 항상 새로운 흥미를 제공하며, 함께 시간을 보낼 때 미스터리한 매력을 선사하는 눈사람입니다.  `}</Li>
          <Li>{`의미심장한 행동과 말로 둘러싸여 있어, 이성친구들은 그 속에 어떤 이야기가 담겨있는지 알아내기 어려울 것입니다.  `}</Li>
          <Li>{`잔잔하지만 어디로 튈 지 모르는 생각으로 주변을 궁금하게 만들며,
            즐거운 시간을 보내기도 해요.  `}</Li>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>`다만, 과도한 신비로움으로 인해 의사소통에 어려움이`</P>
        <P>있을 수 있습니다. 상대방과의 관계에서 명확한 소통이 필요해요.</P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#3E721D"
        fontColor="white"

      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#3E721D"
        
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#3E721D"
        
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#3E721D"
      />
      <Div6>날이 선 얼음 덩어리형</Div6>
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
      <Icon alt="" src="/벙어리.png" />
      <Icon1 alt="" src="/얼음.png" />
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
        <KakaoShareButton link="https://www.noonsachin.com/three" color="#A7C6AA" />
      </ButtonsCtaSecondary8>
    </Testresult1Root>
  );
};
