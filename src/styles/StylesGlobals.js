import { createGlobalStyle } from "styled-components";

export const StylesGlobals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --blueDark: #041833;
        --blue: #1875E8;
        --textColorMain: #041833;
        --textColorPost: #444444;
        --white: #FFF;
        --fontMain: 'Raleway', sans-serif;
        --fontSecondary: 'Playfair Display', sans-serif;

        font-family: var(--fontMain);
    }

    #root {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: minmax(0, 1fr);
        min-height: 100vh;
    }

    a, button, input, textarea {
        font: inherit;
        color: inherit;
    }

    button {
        background-color: transparent;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    h1, h2, h3 {
        font-weight: 700;
        line-height: 5rem;
    }

    body::-webkit-scrollbar {
    width: 0.2rem;
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--textColorPost);
        border-radius: 1.3rem;
    }

    body::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.3);
    }
`;