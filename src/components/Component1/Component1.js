import styled from "styled-components";

const BrowncircleboxIcon = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 4px;
  transform: scale(1.348);
`;
const WrapperBrowncirclebox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: -13%;
  border-radius: var(--br-21xl);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  position: absolute;
  height: 91.3%;
  width: 77.5%;
  top: 0%;
  left: 0%;
  letter-spacing: -0.41px;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
`;
const Component1Root = styled.div`
  position: absolute;
  top: 490px;
  left: 15%;
  width: 25vw;;
  height: 23px;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-100);
  font-family: var(--font-noto-sans-kr);
  left: ${(p) => p.propLeft};
`;

const Component1 = ({ description, propLeft }) => {
  return (
    <Component1Root propLeft={propLeft}>
      <WrapperBrowncirclebox>
        <BrowncircleboxIcon alt="" src="/browncirclebox@2x.png" />
      </WrapperBrowncirclebox>
      <Div>{description}</Div>
    </Component1Root>
  );
};

export default Component1;
