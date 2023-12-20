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

export const TestResult7 = () => {
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
      <BoxLarge propTop="480px" boxColor="#F4DFA9" />
      <BoxLarge propTop="736px" boxColor="#F4DFA9" />
      <Tag description="#겉촉속촉 " propLeft="65px" />
      <Tag description="#따뜻한" propLeft="154px" />
      <Tag description="#부드러운" propLeft="243px" />
      <Div3>포근한 극세사 담요형 </Div3>
      <B>
        <Ul>
          <Li>부드럽고 따뜻하여, 누구에게나 포근한 성격의 눈사람입니다.</Li>
          <Li>
            상대방의 입장을 이해하고 공감하는 능력이 뛰어나기 때문에,
            이성친구들이 언제든지 자신을 편하게 털어놓을 수 있는 안전지대로
            여기곤해요.
          </Li>
          <Li>
          남을 배려하고 따뜻한 마음을 가진 당신은 상대방의 기분을 살필 줄 아는
            능력으로, 주변에서도 다정한 눈사람으로 불리곤해요.
          </Li>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>
          `다만, 매사에 다정하다 보면 이성친구가 틈틈이 기회를 노릴 수 있으니`
        </P>
        <P>
          주의해주세요. 서로에게 적절한 경계를 지키는 것이 중요할 수도 있어요!
        </P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#F4DFA9"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#F4DFA9"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#F4DFA9"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#F4DFA9"
      />
      <Div6>베이지톤의 트렌치코트형</Div6>
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
      <Icon alt="" src="/담요.png" />
      <Icon1 alt="" src="/코트.png" />
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
