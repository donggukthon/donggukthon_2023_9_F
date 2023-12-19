import styled from "styled-components";

const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 98.26%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 1.74%;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-200);
`;
const Boxin = styled.div`
  position: absolute;
  height: 96.55%;
  width: 98.26%;
  top: 0%;
  right: 1.74%;
  bottom: 3.45%;
  left: 0%;
  border-radius: var(--br-3xs);
  background-color: #D7C773;
`;
const BoxlargeRoot = styled.div`
  position: absolute;
  top: 480px;
  left: 54px;
  left: calc(50% - 145px);
  width: 287px;
  height: 174px;
  top: ${(p) => p.propTop};
`;

const BoxLarge = ({ propTop }) => {
  return (
    <BoxlargeRoot propTop={propTop}>
      <Shadow />
      <Boxin />
    </BoxlargeRoot>
  );
};

export default BoxLarge;