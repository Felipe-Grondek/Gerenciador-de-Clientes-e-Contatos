import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    
    :root {

        --color-primary: #5ebfe0;
        --color-primary-2: #34abd3;
        --color-primary-3: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --sucess: #3FE864;
        --error: #E83F5B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    ul, ol, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    } 

    input, select {
        background: transparent;
        border: none;
    }

    body {
        background: var(--grey-4);

        div {

            div{
                position: relative;
            }
        }
    }

    h1, h2, h3, h4, h5, h6, p, li, a, label {
        font-family: 'Inter', sans-serif;
        color: var(--grey-0);
    }

    span {
        font-family: 'Inter', sans-serif;
    }
`
