import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 32px 32px 0;

    button {
    margin-left: 16px;
    width: 85px;
    height: 40px;
    background-color: #ffff;
    border: 1px solid ${cores.Neutral200};
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    }
`