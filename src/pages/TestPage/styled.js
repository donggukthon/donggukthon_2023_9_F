import styled from "styled-components";

export const Background = styled.div`
  background: #102531;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StepImage = styled.img`
  margin: 10vw;
  width: 80vw;
`;

export const Button = styled.button`
  width: 90vw;
  height: 8vh;
  margin-top: 3vh;
  border-radius: 30px;
  border: 1px solid white;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0);
  color: white;
`;
