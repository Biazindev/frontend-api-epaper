import { useState } from "react"

import menu from '../../assets/menu.png'
import Logo from "../../assets/e-paper.png"
import bell from '../../assets/bell.png'
import avatar from '../../assets/avatar.jpeg'
import down from '../../assets/down.png'
import layoutGrid from "../../assets/layout-grid.png"
import * as S from './styles'
import { cores } from "../../styles"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <S.Container>
            <S.HeaderContainer>
                <S.MenuIcon>
                    <img src={menu} alt="menu" />
                </S.MenuIcon>
                <S.LogoContainer>
                    <img src={Logo} alt="logo" />
                </S.LogoContainer>
                <div>
                    <span>|</span>
                </div>
                <img src={layoutGrid} alt="layoutGrid" />
                <p>Soluções</p>
                {isMenuOpen && (
                    <S.NavMenu>
                        <a href="#home">Home</a>
                        <a href="#about">Sobre</a>
                        <a href="#services">Serviços</a>
                        <a href="#contact">Contato</a>
                    </S.NavMenu>
                )}
            </S.HeaderContainer>
            <S.NavBar>
                <img src={bell} alt="bell" />
                <S.Detail>
                    <div>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <S.Avatar style={{ display: 'block' }}>
                        <p>Nome do usuário</p>
                        <p style={{ fontSize: '12px', margin: '2px', color: `${cores.Neutral500}`, fontWeight: 400, }}>Organização</p>
                    </S.Avatar>
                    <img src={down} alt="down" />
                </S.Detail>
            </S.NavBar>
        </S.Container>
    )
}

export default Header
