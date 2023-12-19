import styled from "styled-components";

const Longbox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
background: #3E721D;

filter: blur(1px);
`;
const B = styled.b`
  position: absolute;
  top: -1px;
  left: 0px;
  display: inline-block;
  width: 275px;
  height: 21px;
  color: #FFFFFF;
`;
const PinkboxRoot = styled.div`
  position: absolute;
  top: 448px;
  left: calc(50% - 145px);
  width: 275px;
  height: 20px;
  text-align: center;
  font-size: var(--font-size-mini-5);
  color: var(--color-darkslategray-100);
  font-family: var(--font-noto-sans-kr);

  top: ${(p) => p.propTop};
`;

const GreenBox = ({ eyePersonalityEyeSynergyT, propTop }) => {
  return (
    <PinkboxRoot propTop={propTop}>
      <Longbox />
      <B>{eyePersonalityEyeSynergyT}</B>
    </PinkboxRoot>
  );
};

export default GreenBox;
