import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iButtonStyled {
    btnStyle?: string;
    btnSize?: string;
}

interface iLinkStyled {
    btnstyle?: string;
    btnsize?: string;
}

export const ButtonStyled = styled.button<iButtonStyled>`

    width: 100%;
    padding: 0 22px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 1px solid;

    color: var(--grey-0);
    font-size: 16px;
    font-weight: 500;

    transition: 0.26s;

    &:hover {
        transition: 0.26s;
    }

    ${({btnStyle}) => {
        switch(btnStyle) {
            default:
                return css`
                    background: var(--color-primary);
                    border-color: var(--color-primary);

                    &:hover {
                        background: var(--color-primary-2);
                        border-color: var(--color-primary-2);
                    }
                `
            case "disabled":
                return css`
                    background: var(--color-primary-3);
                    border-color: var(--color-primary-3);
                `
            case "grey":
                return css`
                    background: var(--grey-3);
                    border-color: var(--grey-3);

                    &:hover {
                        background: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                `
            case "grey-light":
                return css`
                    background: var(--grey-1);
                    border-color: var(--grey-1);

                    &:hover {
                        background: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                `
        }
    }}

    ${({btnSize}) => {
        switch(btnSize) {
            default:
                return css`
                    height: 48px;
                `
            case "big": 
                return css`
                        height: 40px;
                    `
            case "medium":
                return css`
                    height: 32px;
                `
            case "small":
                return css`
                    height: 32px;
                    width: 32px;
                    padding: 0;
                `
        }
    }}
`

export const LinkStyled = styled(Link)<iLinkStyled>`

    width: 100%;
    padding: 0 22px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 1px solid;

    color: var(--grey-0);
    font-size: 16px;
    font-weight: 500;

    transition: 0.26s;

    &:hover {
        transition: 0.26s;
    }

    ${({btnstyle}) => {
        switch(btnstyle) {
            default:
                return css`
                    background: var(--color-primary);
                    border-color: var(--color-primary);

                    &:hover {
                        background: var(--color-primary-2);
                        border-color: var(--color-primary-2);
                    }
                `
            case "disabled":
                return css`
                    background: var(--color-primary-3);
                    border-color: var(--color-primary-3);
                `
            case "grey":
                return css`
                    background: var(--grey-3);
                    border-color: var(--grey-3);

                    &:hover {
                        background: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                `
            case "grey-light":
                return css`
                    background: var(--grey-1);
                    border-color: var(--grey-1);

                    &:hover {
                        background: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                `
        }
    }}

    ${({btnsize}) => {
        switch(btnsize) {
            default:
                return css`
                    height: 48px;
                `
            case "big": 
                return css`
                        height: 40px;
                    `
            case "medium":
                return css`
                    height: 32px;
                `
            case "small":
                return css`
                    height: 32px;
                    width: 32px;
                `
        }
    }}
`