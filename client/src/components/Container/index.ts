import styled, { css } from "styled-components";

interface iContainer {
    styleType?: string;
}

export const Container = styled.div<iContainer>`
    max-width: 1280px;
    margin: 0 auto;

    ${({styleType}) => {
        switch(styleType) {
            case "center":
                return css`
                    min-height: 98vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `
        }
    }}
`