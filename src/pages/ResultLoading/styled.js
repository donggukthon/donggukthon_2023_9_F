import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const Background = styled.div`
  background: #102531;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainImage = styled.img`
  margin-top: 10vh;
  width: 100vw;
`;
export const Image = styled.img``;
export const TextWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  animation: ${moveAnimation} 1s infinite;
`;
export const Text = styled.p`
  color: white;
`;
