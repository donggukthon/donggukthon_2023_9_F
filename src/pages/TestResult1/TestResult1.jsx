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

export const TestResult1 = () => {
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
      <BoxLarge propTop="480px" boxColor="#CDDCFF" />
      <BoxLarge propTop="736px" boxColor="#CDDCFF" />
      <Tag description="#겉바속바 " propLeft="65px" />
      <Tag description="#에너제틱 " propLeft="154px" />
      <Tag description="#만능파티러" propLeft="243px" />
      <Div3>스포티한 눈썰매형</Div3>
      <B>
        <Ul>
          <Li>{`언제나 활기차고 에너제틱한 스포티한 느낌의 눈사람이에요. `}</Li>
          <Li>{`어떤 활동이든 즉흥적으로 참여하고, 무엇보다 동적인 활동을 통해 스트레스를 해소하는 스타일이에요. `}</Li>
          <Li>{`이성친구들 앞에서도 낯을 가리지않고, 다함께 어울리는 것을 좋아하며 털털하고 쿨한 성격으로 인하여 주위에 많은 친구들이 모이는 편이에요.  `}</Li>
          <Li2>이성친구는 이성친구 일 뿐! 더 의미부여를 하지 않아요.</Li2>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>`다만, 약속이 많은 편이라 기존의 친했던 친구에게`</P>
        <P>소홀해질 수도 있으니 관계를 유지하는 노력도 필요해보여요.</P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#CDDCFF"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#CDDCFF"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#CDDCFF"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#CDDCFF"
      />
      <Div6>얼음이 들어간 핫초코형</Div6>
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
      <Icon alt="" src="/스포티.png" />
      <Icon1 alt="" src="/핫초코1.png" />
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
