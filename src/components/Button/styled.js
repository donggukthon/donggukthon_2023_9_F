import styled from "styled-components";

const ButtonStyles = {
  loginBtn: {
    width: "7vw",
    height: "5vh",
  },
};

export const StyledButton = styled.button`
  ${props => ButtonStyles[props.theme]}
`;
