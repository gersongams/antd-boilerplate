import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
      // This defines what 1rem is
      font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
      // tablet
      @media only screen and (max-width: 75em) {
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
      }
      // phone
      @media only screen and (max-width: 56.25em) {
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
      }
      // large screen
      @media only screen and (min-width: 112.5em) {
        font-size: 75%; //1rem = 12, 12/16
      }
  }

  body {
      box-sizing: border-box !important;
      padding: 0 !important;
      font-family: 'Ubuntu', sans-serif !important;
      font-weight: 400 !important;
      line-height: 1.7 !important;
      color: rgba(0, 0, 0, 0.65) !important;
      margin: 0 !important;
  }

  ::-webkit-scrollbar {
      width: 6px;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
`;

export { GlobalStyle };
