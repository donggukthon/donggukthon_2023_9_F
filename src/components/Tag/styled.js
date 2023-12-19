import styled from "styled-components";

export const BrowncircleboxIcon = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  left: 17%;
  top: 6%;
  transform: scale(1.348);
`;
export const WrapperBrowncirclebox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: calc(50% - 70px);
  border-radius: var(--br-21xl);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div = styled.div`
  position: absolute;
  height: 91.3%;
  width: 77.5%;
  top: -10%;
  left: calc(50% - 40px);
  letter-spacing: -0.41px;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
`;
export const Component1Root = styled.div`
  position: absolute;
  top: 490px;
  left: calc(50% - 50px);
  width: 25vw;
  height: 23px;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-100);
  font-family: var(--font-noto-sans-kr);
  left: ${p => p.propLeft};
`;
