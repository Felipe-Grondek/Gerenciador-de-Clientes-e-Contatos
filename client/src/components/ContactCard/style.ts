import styled from "styled-components";

export const CardStyled = styled.li`

height: 50px;
padding: 0 16px;

display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;

background: var(--grey-4);
border-radius: 4px;

transition: 0.26s ease-in;

&:hover {
    background: var(--grey-2);
    
    .cardContainer{
        h4 {
            color: var(--grey-0);
            transition: 0.26s ease-out;
        }
        
        .trashIcon {
            color: var(--grey-0);
            transition: 0.26s ease-out;
        }
    }
    
    transition: 0.26s ease-out;
}

    h3 {
    font-size: 14px;
    font-weight: 700;
    }

    .clickContainer {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
        font-size: 14px;
        font-weight: 700;
        padding: 0;
        }

        h4 {
            font-size: 12px;
            font-weight: 400;
            color: var(--grey-1);
        }
    }

    .cardContainer {
        width: fit-content;
        min-width: 30px;

        display: inline-flex;
        align-items: center;
        gap: 24px;


        button {
            display: inline-flex;
            justify-content: center;
            align-items: center;

            width: 26px;
            height: 26px;
        }

        .trashIcon {
            color: var(--grey-1);
            height: 18px;
            width: 18px;
        }
    }
`
