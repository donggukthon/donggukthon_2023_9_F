import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d5dee0;
  border-radius: 10px 0 0 10px;
  animation: ${slideInAnimation} 0.8s ease-in-out;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #102531;
  width: 80%;
  height: 20%;
`;

export const Image = styled.img``;

export const FooterImage = styled.img`
  width: 20vw;
  position: fixed;
  bottom: 2vh;
  right: 5vw;
`;

export const Close = styled.p`
  width: 5vw;
  position: absolute;
  top: 2vh;
  left: 5vw;
  color: #102531;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 70%;
  height: 8%;
  border-radius: 10px;
  color: #102531;
  font-weight: bold;
  font-size: 1.2rem;
  fill: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  stroke-width: 1px;
  stroke: #bfbfbf;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
`;
