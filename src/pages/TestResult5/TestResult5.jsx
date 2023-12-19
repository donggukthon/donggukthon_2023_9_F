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

export const TestResult5 = () => {
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
      <BoxLarge propTop="480px" boxColor="#B8A7C6" />
      <BoxLarge propTop="736px" boxColor="#B8A7C6" />
      <Tag description="#겉바촉속 " propLeft="65px" />
      <Tag description="#은밀한따뜻" propLeft="154px" />
      <Tag description="#친친진국" propLeft="243px" />
      <Div3>차가운 색감의 벨벳 머플러형</Div3>
      <B>
        <Ul>
          <Li>
            `겉은 벨벳으로 감싸져 있어 차갑고 닿기 전까지는 다소 거리감을 느낄
            수 있지만, 속은 따뜻하고 포근한 마음을 품고 있는 눈사람입니다. `
          </Li>
          <Li>
            `겉과 속의 대조적인 느낌이 이성친구들에게 호기심을 자극할 수
            있어요.`
          </Li>
          <Li2>
            새로운 친구들을 새로 사귀기 보다는 기존의 친한 이성친구들과 시간을
            보내며 이들과는 긴밀한 이야기를 나누곤해요.
          </Li2>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>{`다만, 겉으로는 차가운 인상을 주기 때문에,  `}</P>
        <P>
          친해지고 싶은 이성친구에게는 감정을 표현해주는 노력이 필요할 수
          있어요.
        </P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#9A7FA8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#9A7FA8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#9A7FA8"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#9A7FA8"
      />
      <Div6>소라게의 베레모형</Div6>
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
      <Icon alt="" src="/mupler1.png" />
      <Icon1 alt="" src="/belemo1.png" />
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
