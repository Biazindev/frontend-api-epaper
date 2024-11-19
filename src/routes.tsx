import Cover from '../src/components/Cover/index'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Modal from "./components/Modal"

const Rotas = () => (

    <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/documents" element={<Home />} />
        <Route path="/modal" element={<Modal onClose={function (): void {
            throw new Error("Function not implemented.")
        }} />} />
    </Routes>
)

export default Rotas