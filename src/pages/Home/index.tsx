import { useState } from 'react'
import Button from "../../components/Button"
import Card from "../../components/Card"
import Table from "../../components/Table"
import Footer from "../Footer"
import Header from "../Header"
import Sidebar from '../../components/Sidebar'

const Home = () => {
    return (
        <>
            <Header />
            <Card />
            <Table />
            <Sidebar />
            <Footer />
        </>
    )
}

export default Home
