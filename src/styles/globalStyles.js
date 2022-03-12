import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        border: 0;
    }

    body{
        background-color: #1f2128;
    }

    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;
