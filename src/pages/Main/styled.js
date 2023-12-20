import styled from "styled-components";

export const Background = styled.div`
  background: #102531;
  width: 100vw;
  height: 84vh;
  position: fixed;
  z-index: -2;
`;

export const MainImage = styled.img`
  position: fixed;
  width: 100vw;
  height: 70vh;
  bottom: 15vh;
  z-index: -1;
`;

export const MenuImage = styled.img`
  position: fixed;
  width: 10vw;
  height: auto;
  top: 1vh;
  right: 3vw;
  z-index: 0;
`;

export const MainLogo = styled.img`
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

export const SnowmanImage = styled.img`
  position: fixed;
  top: 25vh;
  left: 20%;
  z-index: -1;
`;
export const StartButton = styled.button`
  background: white;
  width: 85vw;
  height: 8vh;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 5px rgba(16, 37, 49, 0.5);
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Text = styled.p`
  position: fixed;
  text-align: center;
  width: 100vw;
  top: 7.5vh;
  z-index: 0;
  font-size: 0.8rem;
  color: #bdc3c7;
`;
