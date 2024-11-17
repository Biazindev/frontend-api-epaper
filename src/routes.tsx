import React from "react"
import Cover from '../src/components/Cover/index'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/documents" element={<Home />} />
    </Routes>
    )

    export default Rotas