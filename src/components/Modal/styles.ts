import styled from "styled-components"
import { cores } from "../../styles"

export const Overlay = styled.div`
  display: none;  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 696px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  h2 {
    font-size: 18px;
    color: ${cores.primaryText};
    margin-bottom: 8px;
  }

  h6 {
    font-size: 14px;
    font-weight: 100;
    color: ${cores.Neutral500};
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
  }
`

export const Detail = styled.div`
  width: 57px;
  height: 32px;
  padding: 8px;
  border-radius: 9px;
  background-color: #F3F4F6;
  margin-bottom: 24px;

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`

export const FormGrid = styled.div`
  display: block;
  gap: 16px;
  margin-bottom: 16px;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: ${cores.Neutral500};
      margin-bottom: 8px;
      font-weight: bold;
    }

    input, select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      margin-bottom: 24px;
      outline: none;
      color: ${cores.Neutral500};
    }
  }

  @media (max-width: 768px) {
    div {
      margin-bottom: 12px;
    }

    input, select {
      font-size: 16px;
      padding: 10px;
    }
  }
`
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`

export const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover:not(:disabled) {
    background-color: #a71d2a;
  }
`

export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 184px;
  border: 2px dashed ${cores.primary500};
  border-radius: 4px;
  text-align: center;
  background-color: ${cores.Neutral0};

  p {
    font-size: 14px;
    margin-bottom: 16px;
    color: ${cores.Neutral700};
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  label {
    margin-top: 8px;

    input {
      margin-top: 8px;
    }
  }

  @media (max-width: 768px) {
    height: 160px;
    p {
      font-size: 12px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const TextP = styled.p`
  font-size: 12px;
  font-weight: 100;
  color: ${cores.Neutral400};
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const Loading = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  height: 88px;
  border: 1px solid ${cores.Neutral200};
  border-radius: 4px;
  margin-top: 24px;

  > div {
    width: 56px;
    height: 56px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #F9FAFB;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    p {
      display: flex;
    }
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 12px;
    height: 72px;

    > div {
      width: 48px;
      height: 48px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Feature = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${cores.Neutral200};
  margin: 8px 0 24px 0;

  @media (max-width: 768px) {
    height: 36px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
      margin-bottom: 8px;
    }
  }
`
