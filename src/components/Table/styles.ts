import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    padding: 0 32px 32px 96px ;

    div {
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    table {
        width: 100%;
        border-spacing: 0;
        overflow: hidden;
    }

    th, td {
        border: none;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        padding: 8px;
        text-align: left;
        color: ${cores.Neutral900};
        
        
        p {
            font-size: 12px;
            color: ${cores.Neutral500};
        }
    }

    th {
        font-size: 14px;
        font-weight: 100;
        color: ${cores.Neutral500};
        
    }

    tr {
       
    span {
        img {
            width: 16px;
            height: 16px;
            align-items: center;
        }
    }
    }

    tfoot {
    background-color: ${cores.Neutral0};

    td {
        font-size: 14px;
        height: 51px;

        strong {
        display: flex;
        font-size: 12px;
        width: 150px;
        font-weight: 200;
        color: ${cores.Neutral500};
        }
    }
    }
`
export const DropdownMenu = styled.div`
    width: 205px;
    height: 72px;
    position: absolute;
    right: 56px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    flex-direction: column;

    button {
        padding: 8px 16px;
        background: none;
        border: none;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        span {
            display: flex;
            align-items: center;
            margin-right: 8px;
        }

        img {
            width: 16px;
            height: 16px;
        }

        &:hover {
            background: #f5f5f5;
        }
    }
`
