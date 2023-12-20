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

export const TestResult8 = () => {
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
      <BoxLarge propTop="480px" boxColor="#D7C773" />
      <BoxLarge propTop="736px" boxColor="#D7C773" />
      <Tag description="#겉바속촉 " propLeft="65px" />
      <Tag description="#겉만시크" propLeft="154px" />
      <Tag description="#마음은진득" propLeft="243px" />
      <Div3>베이지톤의 트렌치코트형 </Div3>
      <B>
        <Ul>
          <Li>
            `겉으로는 쓸쓸하고 시크한 이미지를 갖춘 눈사람이지만, 이는 그저
            겉치레일 뿐입니다.`
          </Li>
          <Li>
            `속은 고요함과 동시에 따듯한 매력이 있어, 소소한 일상 속에서 특별한
            순간을 찾아 즐기는 것을 즐겨해요.`
          </Li>
          <Li2>
            실제 성격은 조용하면서도 깊은 감수성을 품고 있어, 이성친구들과의
            대화에서는 심오한 이야기부터 가벼운 소소한 이야기까지 다양한 주제를
            공유하곤 해요.
          </Li2>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>`다만, 시크한 이미지로 인해 처음에는 소심해 보일 수 있어,`</P>
        <P>
          이성친구와 친밀한 관계를 형성하고싶다면 마음을 열어보는 것이 좋아요
        </P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#D7C773"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#D7C773"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#D7C773"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#D7C773"
      />
      <Div6>포근한 극세사 담요형</Div6>
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
      <Icon alt="" src="/코트.png" />
      <Icon1 alt="" src="/담요.png" />
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
