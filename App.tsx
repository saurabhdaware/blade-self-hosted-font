import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.h1`
  font-weight: 600;
  font-size: 72px;
  line-height: 78px;
  margin: 0px;
`;

const StyledHeading = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin: 24px 0px 0px 0px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 18px 0px 0px 0px;
`;

const Semibold = styled.span`
  font-weight: 600;
`

function App(): React.ReactElement {
  return (
    <>
      <StyledDisplay>DisplayXLarge</StyledDisplay>
      <StyledHeading>HeadingXLarge</StyledHeading>      
      <StyledText><Semibold>Inter:</Semibold> Some Random Lorem Ipsum Text 12434  ₹ &, $ @ "", \=-939=+_!@#$%^&*() </StyledText>
      <StyledText style={{ fontFamily: '-apple-system, sans-serif' }}><Semibold>Fallback:</Semibold> Some Random Lorem Ipsum Text 12434  ₹ &, $ @ "", \=-939=+_!@#$%^&*() </StyledText>
    </>
  );
}

export default App;
