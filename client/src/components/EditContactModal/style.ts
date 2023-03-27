import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 100vw !important;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #12121480;

    & > form {
        padding: 0;
        max-width: 380px;

        & > .formHeader {
            padding: 12px 20px;
            height: 50px;
            width: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            border-radius: 4px 4px 0 0;

            background: var(--grey-2);

            & > h3 {
                padding: 0;
                font-size: 14px;
            }

            & > button {
                margin: 0;
                padding: px;

                font-size: 16px;
                color: var(--grey-1);
            }
        }

        & > .formBody {
            width: 100%;

            padding: 12px 20px;
            gap: unset;

            & > button {
                font-size: 16px;
                font-weight: 500;

                margin-top: 18px;
            }

            & > .buttonArea {
                margin-top: 24px;

                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 8px;

                & > button {
                    margin: 0;
                    width: 48%;
                    font-size: 16px;
                }
            }
        }
    }
`
