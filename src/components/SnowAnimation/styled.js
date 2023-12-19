import styled, { keyframes } from "styled-components";

export const FallingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  3% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translate(0, 70px);
    opacity: 0;
  }
`;

export const Snowflake = styled.img`
  width: 8vw;
  position: fixed;
  top: ${() => `${Math.random() * 100}vh`};
  left: ${() => `${Math.random() * 100}vw`};
  animation: ${FallingAnimation} 5s linear infinite;
`;
