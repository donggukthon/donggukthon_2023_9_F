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

export const TestResult2 = () => {
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
      <BoxLarge propTop="480px" boxColor="#EBBEBF" />
      <BoxLarge propTop="736px" boxColor="#EBBEBF" />
      <Tag description="#겉촉속촉 " propLeft="65px" />
      <Tag description="#차분과수줍 " propLeft="154px" />
      <Tag description="#부드러운" propLeft="243px" />
      <Div3>소라게의 베레모형</Div3>
      <B>
        <Ul>
          <Li>{`섬세하고 따듯한 느낌을 품은 눈사람으로, 수줍은 미소를 지닌 눈사람입니다. `}</Li>
          <Li>{`언제나 신중하게 상황을 살피며 주변과 조용한 대화를 즐기며, 이성친구에게도 본인의 성격인 섬세한 다정함을 전해주곤해요. `}</Li>
          <Li>{`겉으로 보이는 이미지만큼이나 속은 여리고 생각이 많기에, 이성친구와의
            관계에서는 상대방의 말과 행동을 깊게 읽고, 의미부여해보는 경향이
            있어요. `}</Li>
          
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>{`다만, 이성친구와의 관계에 관한 과도한 해석이 오해를 `}</P>
        <P>
          낳을 수 있으니, 솔직하고 명확한 의사소통이 중요할 수 있어요.
        </P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#CD9697"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#CD9697"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#CD9697"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#CD9697"
      />
      <Div6>차가운 색감의 벨벳 머플러형</Div6>
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
      <Icon alt="" src="/belemo1.png" />
      <Icon1 alt="" src="/mupler1.png" />
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
        <KakaoShareButton link="https://www.noonsachin.com/two" color="#EBBEBF" />
      </ButtonsCtaSecondary8>
    </Testresult1Root>
  );
};
