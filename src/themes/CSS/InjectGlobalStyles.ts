import { createGlobalStyle } from "styled-components";

const InjectGlobalStyles = createGlobalStyle`
  html, body {
    height: 100vh;
    width: 100%;
  }

  body {
    box-sizing: border-box;

    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;

    margin: 0;
    padding: 0;
  }
`;

export default InjectGlobalStyles;
