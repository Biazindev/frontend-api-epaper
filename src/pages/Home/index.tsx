import { useState } from 'react'
import Card from "../../components/Card"
import Table from "../../components/Table"
import Footer from "../Footer"
import Header from "../Header"
import Sidebar from '../../components/Sidebar'
import Modal from '../../components/Modal'

const Home = () => {
    const [filteredDocuments, setFilteredDocuments] = useState<Documento[]>([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleFilteredDocuments = (documents: Documento[]) => {
        setFilteredDocuments(documents)
    }

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return (
        <>
            <Header />
            <Card onApplyFilter={handleFilteredDocuments} onOpenModal={handleOpenModal} />
            <Table documents={filteredDocuments} />
            {isModalVisible && <Modal onClose={handleCloseModal} />}
            <Sidebar />
            <Footer />
        </>
    )
}

export default Home
