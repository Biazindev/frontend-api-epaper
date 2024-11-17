import { Container } from "./styles"
import logo from '../../assets/Logotipo - e-paper.png'
import { cores } from "../../styles"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Container>
            <div style={{display: 'flex', alignItems: 'center', color: `${cores.Neutral500}`}}>
                <img src={logo} alt="logo" />
                <p>Copyright © {currentYear} e-paper</p>
            </div>
        </Container>
    )
}

export default Footer
