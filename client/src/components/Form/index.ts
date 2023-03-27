import styled from "styled-components";

export const FormStyled = styled.form`
    width: 96%;
    max-width: 768px;
    margin: 0 auto 8px;
    padding: 32px 22px;

    background: var(--grey-3);
    box-shadow: 0px 3px 32px -8px #00000040;

    border-radius: 4px;

    display: flex;
    flex-direction: column;


    div {
        display: flex;
        flex-direction: column;
        position: relative;
        inset: 0;
    }

    .formTitle {
        text-align: center;

        font-size: 20px;
        font-weight: 700;
    }

    .formDescription {
        font-size: 14px;
        font-weight: 600;
        color: var(--grey-1);
        text-align: center;

        margin: 16px 0 26px;
    }

    .icon {
        color: var(--grey-0);
        position: absolute;
        bottom: 17px;
        right: 12px;
    }

    button {
        margin-top: 32px;
    }

    span {
        display: block;
        min-height: 15px;

        font-size: 12px;
        font-weight: 400;
        color: var(--color-primary);
        margin-top: 4px;
    }
`