import styled from "styled-components";

export const Title = styled.h1`
    color: var(--color-primary);
    font-weight: 700;
    font-size: 26px;

    text-align: center;
    margin-bottom: 36px;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 96%;
    max-width: 425px;
    height: 80px;

    h1 {
        margin: 0;
    }

    a {
        width: fit-content;
    }
`