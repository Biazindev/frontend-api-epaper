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
`

export const NavBar = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    right: 16px;
    

    > img {
    width: 24px;
    height: 24px;
    margin-right: 40px;
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
`

export const MenuIcon = styled.div`
    cursor: pointer;

    img {
    width: 24px;
    height: 24px;
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
`

export const Avatar = styled.div`
    display: block;

    p {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.Neutral700};
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
    }
`
