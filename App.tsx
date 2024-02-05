import React from "react";
import styled from "styled-components";
import { Badge, InfoIcon } from "@razorpay/blade/components";

const StyledDisplay = styled.h1`
  font-family: "Tasa Orbiter";
  font-weight: 600;
  font-size: 72px;
  line-height: 78px;
  margin: 0px;
`;

const StyledHeading = styled.h2`
  font-family: "Tasa Orbiter";
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

const StyledTextTwo = styled(StyledText)`
  font-family: "Inter New";
`;

const StyledTextThree = styled(StyledText)`
  font-family: -apple-system, sans-serif;
`;

function App(): React.ReactElement {
  return (
    <>
      <StyledDisplay>DisplayXLarge</StyledDisplay>
      <StyledHeading>HeadingXLarge</StyledHeading>
      <StyledText>Inter: &$₹</StyledText>
      <StyledTextTwo>Inter: &$₹</StyledTextTwo>
      <StyledTextThree>Apple System: &$₹</StyledTextThree>
    </>
  );
}

export default App;
