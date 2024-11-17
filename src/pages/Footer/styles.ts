import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.footer`
    height: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: ${cores.Neutral100};
    border-top: 1px solid ${cores.Neutral200};

    img {
    width: 124px;
    height: 40px;
    }
`