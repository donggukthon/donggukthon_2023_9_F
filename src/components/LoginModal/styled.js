import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 85vw;
  height: 27vh;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const GoogleButton = styled.button`
  border-radius: 10px;
  border: 1px solid rgba(19, 69, 96, 0.5);
  background: #e2e8ec;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
export const KakaoButton = styled.button`
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(19, 69, 96, 0.5);
  background: #fae64c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;
export const NonmemberButton = styled.button`
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(19, 69, 96, 0.5);
  background: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);s
`;
