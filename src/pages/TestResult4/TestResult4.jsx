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

export const TestResult4 = () => {
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
      <BoxLarge propTop="480px" boxColor="#CBB0A1" />
      <BoxLarge propTop="736px" boxColor="#CBB0A1" />
      <Tag description="#겉촉속바 " propLeft="65px" />
      <Tag description="#쌍면성" propLeft="154px" />
      <Tag description="#선넘지마" propLeft="243px" />
      <Div3>얼음이 들어간 핫초코형</Div3>
      <B>
        <Ul>
          <Li>{`겉으로는 다정하고 외향적으로 보이지만, 실제로 친해지면 무뚝뚝하고 쿨한 면이 있는 눈사람입니다.  `}</Li>
          <Li>{`주변에는 밝고 다정한 행동으로 친근한 이미지를 유지하여 이성친구는 많은 편이지만, 실제로는 이성친구에게 감정을 표현하는 것을 어려워하며 친밀한 관계에서도 거리를 두는 경향이 있어요. `}</Li>
          <Li>{`이성친구로서 지켜야할 것들은 지키며, 선을 넘지않는 경계를 잘 아는
            편이에요. `}</Li>
        </Ul>
      </B>
      <Div4>눈사람 여사친/남사친 성향 테스트</Div4>
      <Div5>
        <P>{`다만, 속으로부터의 거리감 때문에 가끔은 오해를 받을 수 있으니, `}</P>
        <P>
          친분을 유지하면서 상대방에게 충분한 공간을 주는 것이 중요할 수 있어요.
        </P>
      </Div5>
      <WarningIcon alt="" src="/warning.png" />
      <ColorBox
        eyePersonalityEyeSynergyT="내 눈사람의 성향은 ?"
        propTop="448px"
        boxColor="#AC8276"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="나랑 시너지를 내는 눈사람 유형은 ?"
        propTop="701px"
        boxColor="#AC8276"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="Snowman Village에 눈사람 등록하기"
        propTop="924px"
        boxColor="#AC8276"
      />
      <ColorBox
        eyePersonalityEyeSynergyT="SNS에 나만의 눈사람 공유하기"
        propTop="1051px"
        boxColor="#AC8276"
      />
      <Div6>스포티한 눈썰매형</Div6>
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
      <Icon alt="" src="/핫초코1.png" />
      <Icon1 alt="" src="/스포티.png" />
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
        <KakaoShareButton link="https://www.noonsachin.com/four" color="#CBB0A1" />
      </ButtonsCtaSecondary8>
    </Testresult1Root>
  );
};
