import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    display: flex;
    margin-left: 64px;
`

export const Documents = styled.div`
    margin: 32px;
    width: 100%;
    height: 56px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${cores.Neutral200};
    padding-bottom: 24px;
    
    span {
        font-size: 24px;
        font-weight: bold;
        color: ${cores.Neutral700};
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: ${cores.Neutral500};
    }

    div {
        align-items: center;
    }

    input {
        width: 330px;
        height: 40px;
        border: 1px solid ${cores.Neutral300};
        border-radius: 4px;
        margin-right: 16px;

        &::placeholder {
            padding-left: 16px;
            color: ${cores.Neutral400};
            font-size: 14px;
        }
    }

    button {
        width: 93px;
        height: 40px;
        font-size: 16px;
        margin-left: 16px;
        background-color: #ffff;
        border-radius: 4px;
        border: 1px solid ${cores.Neutral200};

        img {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            align-items: center;
        }
    }
`

export const InputContainer = styled.div`
    position: relative;
    width: 330px;
    height: 40px;

    img {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        pointer-events: none;
    }

    input {
        height: 100%;
        border-radius: 4px;
        font-size: 14px;
        color: ${cores.Neutral700};
        outline: none;
        width: 330px;
        border: 1px solid ${cores.Neutral300};
        

        &::placeholder {
            padding-left: 16px;
            color: ${cores.Neutral400};
            font-size: 14px;
        }
    }
`

export const Filter = styled.div`
    display: flex;
`

export const DocType = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    padding: 0 32px 48px 96px;
    margin-top: 24px;
    align-items: center;
    justify-content: space-between;

    button {
        width: 163px;
        height: 40px;
        align-self: baseline;
        background-color: #05C151;
        color: #FFFF;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
`

export const DocContainer = styled.div`
    display: flex;
`

export const Adjuste = styled.div`
    display: block;


    div {
        display: flex;
        align-items: center;

        label {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.Neutral700};
    }

    img {
        width: 16px;
        height: 16px;
        margin-left: 4px;
        color: ${cores.Neutral400};
    }
}

    select {
        height: 100%;
        border-radius: 4px;
        margin-top: 2px;
        margin-right: 32px;
        font-size: 14px;
        color: ${cores.Neutral700};
        outline: none;
        width: 330px;
        height: 40px;
        border: 1px solid ${cores.Neutral300};
    }
`