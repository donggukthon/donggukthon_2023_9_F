import React from "react";
import {
  Component1Root,
  WrapperBrowncirclebox,
  BrowncircleboxIcon,
  Div,
} from "./styled";

const Tag = ({ description, propLeft }) => {
  return (
    <Component1Root propLeft={propLeft}>
      <WrapperBrowncirclebox>
        <BrowncircleboxIcon alt="" src="/browncirclebox@2x.png" />
      </WrapperBrowncirclebox>
      <Div>{description}</Div>
    </Component1Root>
  );
};

export default Tag;
