import styled from "styled-components"
import { cores } from "../../styles"

export const CardContainer = styled.div`
    width: 64px;
    position: absolute;  /* Fixando a posição em relação ao rodapé */
    top: 14.6%; 
    transform: translateX(0%);  /* Ajuste para centralizar o elemento */
    z-index: 10;
    justify-content: start;
    border: 1px solid ${cores.Neutral200};
    height: 546px;

    > div {
        width: 32px;
        height: 32px;
        margin: 16px auto;
        padding: 8px;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: ${cores.primary100};

        img {
            width: 16px;
            height: 16px;
            justify-content: center;
        }
    }
`
