import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root {
        --theme-background-primary: #1D4851;
        --theme-bar: #9AB5BC;
        --branco: #F4F4F4;
        --Cards: #171919;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        outline: none;
        vertical-align: baseline;
    }
`

export default GlobalStyle