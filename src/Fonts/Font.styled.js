import { createGlobalStyle } from "styled-components";
import PoppinBlack from "./font/Poppins-Black.ttf";
import PoppinItalic from "./font/Poppins-BlackItalic.ttf";
import PoppinNormalItalic from "./font/Poppins-Italic.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PoppinBlack';
    src: url(${PoppinBlack}) format('opentype'); 
  }
 
  @font-face {
    font-family: 'PoppinItalic';
    src: url(${PoppinItalic}) format('opentype'); 
  }
  
  @font-face {
    font-family: 'PoppinNormalItalic';
    src: url(${PoppinNormalItalic}) format('opentype'); 
  }

  body {
    font-family: 'wolf', sans-serif; 
  }
`;

export default GlobalStyle;
