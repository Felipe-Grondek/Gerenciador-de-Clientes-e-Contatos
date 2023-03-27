import styled from "styled-components";

export const NavStyled = styled.nav`

    height: 80px;
    display: flex;
    align-items: center;

    position: sticky;
    inset: 0;
    z-index: 10;

    background-color: var(--grey-4);
    border-bottom: 1px solid var(--grey-2);

    div {
        width: 96%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            margin: 0;
        }

        a {
            width: fit-content;
        }
    }
`

export const Header = styled.header`
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--grey-2);

    div {
        height: 100%;
        padding: 24px 0;
        width: 96%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;

        h2 {
            font-size: 18px;
            font-weight: 700; 
        }

        h3 {
            font-size: 12px;
            font-weight: 500;
            color: var(--grey-1);
        }

        @media(min-width: 425px) {
            flex-direction: row;
            align-items: center;
            gap: unset;
        }
    }
`

export const Main = styled.main`

    padding: 32px 0;

    div {
        width: 96%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 22px;
        

        h2 {
            font-size: 18px;
            font-weight: 600;
        }

        button {
            font-size: 22px;
            font-weight: 500;
            color: var(--grey-0);
        }

        div > h3 {
            font-size: 18px;
            font-weight: 700; 
            padding-bottom: 32px;
        }

        p {
            font-size: 16px;
            font-weight: 500;
            color: var(--grey-1);
        }
    }

`

export const ContactList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    height: 80%;
    padding: 22px;
    background: var(--grey-3);
    border-radius: 4px;

`