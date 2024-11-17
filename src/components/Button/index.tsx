import { Container } from "./styles"

interface ButtonProps {
    prevPage: () => void
    nextPage: () => void
}

const Button = ({ prevPage, nextPage }: ButtonProps) => (
    <Container>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Próximo</button>
    </Container>
)

export default Button
