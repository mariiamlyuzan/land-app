import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
     html {
       scroll-behavior: smooth;
       overflow-x: hidden;
       width: 100%;
       height: 100%;
     }
     #root{
       height: 100%;
     }
     *,
     *::before,
     *::after {
       box-sizing: border-box;
     }
    body {
      height: 100%;
      overflow-x: hidden;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont,  'Open Sans',
      sans-serif;
     x
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none;
    margin:0;}
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
    }
`;

export default GlobalStyle;
