import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;

export default GlobalStyles