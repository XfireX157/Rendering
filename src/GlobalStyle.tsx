import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root {
        --theme-background-primary: #1D4851;
        --theme-button: #FF4701;
        --theme-bar: #9AB5BC;
        --theme-card: #FF9001;
        --branco: #F4F4F4;
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