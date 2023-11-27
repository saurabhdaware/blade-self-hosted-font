import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BladeProvider, Box } from "@razorpay/blade/components";
import { paymentTheme } from "@razorpay/blade/tokens";
import '@razorpay/blade/fonts.css';

import App from "./App";

const GlobalStyles = createGlobalStyle`
* { 
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.typography.fonts.family.text}
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${(props) => props.theme.typography.fonts.family.heading};
}
`;

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root is null");
}
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BladeProvider themeTokens={paymentTheme} colorScheme="light">
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
