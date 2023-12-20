import React from "react";
import { BoxContainer, Longbox, B } from "./styled";

const BlueBox = ({ eyePersonalityEyeSynergyT, propTop, boxColor }) => {
  return (
    <BoxContainer propTop={propTop}>
      <Longbox boxColor={boxColor} />
      <B>{eyePersonalityEyeSynergyT}</B>
    </BoxContainer>
  );
};

export default BlueBox;