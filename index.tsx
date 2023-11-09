import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import { BladeProvider, Box } from "@razorpay/blade/components";
import { paymentTheme, createTheme } from "@razorpay/blade/tokens";

import App from "./App";

const GlobalStyles = createGlobalStyle`
* { 
  box-sizing: border-box;
}

@font-face {
  font-family: "TasaOrbiter";
  src: url("/fonts/TASAOrbiterVF.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
`;

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root is null");
}
const root = createRoot(rootElement);

const getTheme = () => {
  if (false) {
    return createTheme({
      brandColor: "undefined",
    });
  }
  return paymentTheme;
};

root.render(
  <StrictMode>
    <BladeProvider themeTokens={getTheme()} colorScheme="light">
      <GlobalStyles />
      <Box
        backgroundColor="surface.background.level1.lowContrast"
        minHeight="100vh"
        padding={["spacing.4", "spacing.7"]}
        display="flex"
        flexDirection="column"
      >
        <App />
      </Box>
    </BladeProvider>
  </StrictMode>
);

console.clear(); // There could be some codesandbox warnings, clearing them here on init
