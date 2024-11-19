import styled from "styled-components"
import { cores } from "../../styles"

export const CardContainer = styled.div`
    width: 64px;
    position: absolute;
    top: 11.7%;
    height: 106vh;
    transform: translateX(0%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid ${cores.Neutral200};
    background-color: ${cores.Neutral0};

    > div {
        width: 32px;
        height: 32px;
        margin: 16px auto;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: ${cores.primary100};

        img {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 1000px) {
        display: none;
    }

    @media (max-width: 480px) {
        width: 48px;
        > div {
            width: 24px;
            height: 24px;

            img {
                width: 12px;
                height: 12px;
            }
        }
    }
`
