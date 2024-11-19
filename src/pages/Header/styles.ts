import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
    padding: 16px;
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${cores.Neutral200};

    div {
        display: flex;
        span {
            margin: 16px;
            font-size: 40px;
            font-family: fangsong;
            color: #E5E7EB;
        }
    }

    @media (max-width: 768px) {
        padding: 12px;
        height: 60px;
    }

    @media (max-width: 480px) {
        padding: 8px;
        height: 56px;
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    width: 332px;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    > p {
        margin-left: 8px;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        width: 220px;
        padding: 0.8rem;
        font-size: 14px;
    }
        
    @media (max-width: 511px) {
        p{
        display: none;
        }
    }

    @media (max-width: 480px) {
        width: 180px;
        font-size: 12px;

        p{
        display: none;
        }
    }
`

export const NavBar = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    right: 16px;

    > img {
        width: 24px;
        height: 24px;
        margin-right: 40px;
    }

    @media (max-width: 768px) {
        margin-right: 16px;        
        > img {
        margin-right: 4px;
    }
    }

    @media (max-width: 480px) {
        margin-right: 8px;
        width: auto;
        > img {
        display: none;
    }
    }
`

export const LogoContainer = styled.div`
    width: 276px;
    height: 48px;

    img {
        width: 224px;
        height: 48px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        width: 200px;
        img {
            width: 180px;
        }
    }

    @media (max-width: 480px) {
        width: 180px;
        img {
            width: 150px;
        }
    }
`

export const MenuIcon = styled.div`
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        img {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 18px;
            height: 18px;
        }
    }
`

export const NavMenu = styled.nav`
    position: absolute;
    top: 60px;
    right: 10px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    flex-direction: column;

    a {
        padding: 0.5rem 0;
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: #007BFF;
    }

    @media (max-width: 768px) {
        top: 50px;
        width: 200px;
    }

    @media (max-width: 480px) {
        top: 45px;
        width: 180px;
    }
`

export const Avatar = styled.div`
    display: block;

    p {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.Neutral700};
    }

    @media (max-width: 768px) {
        p {
            font-size: 12px;
        }
    }
        @media (max-width: 603px) {
        p {
        display: none;
        }
    }

    @media (max-width: 480px) {
        p {
            display: none;
        }
    }
`

export const Detail = styled.div`
    border: 1px solid ${cores.Neutral200};
    height: 48px;
    padding: 8px;
    align-items: center;
    border-radius: 4px;

    >div {
        img {
            margin-right: 8px;
        }
    }

    img {
        width: 32px;
        height: 32px;
        margin-left: 8px;
    }

    @media (max-width: 768px) {
        height: 40px;
        padding: 6px;
    }

    @media (max-width: 603px) {
        
    }

    @media (max-width: 480px) {
        height: 36px;
        padding: 4px;
        img {
            width: 28px;
            height: 28px;
        }
    }
`
