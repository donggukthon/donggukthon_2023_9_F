import styled from "styled-components";

export const Longbox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background: ${p => p.boxColor};
  filter: blur(1px);
`;
export const B = styled.b`
  position: absolute;
  top: -1px;
  left: 0px;
  display: inline-block;
  width: 275px;
  height: 21px;
  color: ${p => p.fontColor};
`;
export const BoxContainer = styled.div`
  position: absolute;
  top: 448px;
  left: calc(50% - 130px);
  width: 275px;
  height: 20px;
  color: #102531;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  top: ${p => p.propTop};
`;