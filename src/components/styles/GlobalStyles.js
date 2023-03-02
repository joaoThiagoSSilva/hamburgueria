import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body, ul, li, h1, h2{
        font-family: 'Inter', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
`;
