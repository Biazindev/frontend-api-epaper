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

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 390px;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 16px;
    overflow-y: auto;
    animation: slideIn 0.3s ease-out forwards;

    h6 {
        font-weight: 100;
        color: ${cores.Neutral500};
        padding-bottom: 16px;
        margin-bottom: 24px;
        border-bottom: 1px solid ${cores.Neutral200};
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`


export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h3 {
        font-size: 18px;
        margin: 0;
        font-weight: 400;
    }

    button {
        background: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
    }
`

export const SidebarContent = styled.div`
    margin-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;

    label {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.Neutral700};
        margin-bottom: 2px;
    }

    input,
    select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 24px;
        outline: none;
    }
`

export const SidebarFooter = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;

    button {
        width: 110px;
        height: 40px;
        flex: 1;
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;

        &:first-child {
            background: #f5f5f5;
        }

        &:last-child {
            background: ${cores.primary500};
            color: white;
        }
    }
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    height: 95px;
    border: 1px solid ${cores.Neutral200};
    border-radius: 4px;
    gap: 8px;

    img {
        width: 16px;
        margin-right: 12px;
        height: 16px;
        flex-shrink: 0;
        position: relative;
        top: 20%;
        left: 3%;
    }

    p {
    font-size: 14px;
    text-align: start;
    line-height: 21px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 0;
    margin-right: 16px;
    text-indent: 0; 
}
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
`

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const DocumentList = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;

  div {
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;

    h3 {
      font-size: 18px;
      color: #333;
    }

    p {
      font-size: 14px;
      color: #666;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`

export const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`

export const DocumentItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`
export const DocumentTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`
export const DocumentDetails = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;

  span {
    font-weight: bold;
    color: #333;
  }
`


