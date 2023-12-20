import React from "react";
import { Shadow, Boxin, BoxlargeRoot } from "./styled";

const BoxLarge = ({ propTop, boxColor }) => {
  return (
    <BoxlargeRoot propTop={propTop}>
      <Shadow />
      <Boxin boxColor={boxColor} />
    </BoxlargeRoot>
  );
};

export default BoxLarge;
