import React from "react";
import styled from "styled-components";
import { Badge, InfoIcon } from "@razorpay/blade/components";

const StyledDisplay = styled.h1`
  font-family: "TasaOrbiter";
  font-weight: 600;
  font-size: 72px;
  line-height: 78px;
  margin: 0px;
`;

const StyledHeading = styled.h2`
  font-family: "TasaOrbiter";
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin: 24px 0px 0px 0px;
`;

const StyledText = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 18px 0px 0px 0px;
`;

function App(): React.ReactElement {
  return (
    <>
      <StyledDisplay>DisplayXLarge</StyledDisplay>
      <StyledHeading>HeadingXLarge</StyledHeading>
      <StyledText>Some Random Lorem Ipsum Text</StyledText>
    </>
  );
}

export default App;
