import { useState } from 'react'
import { useFetchDocumentosQuery, useDeleteDocumentoMutation } from '../../services/api'
import { Container, DropdownMenu } from './styles'
import ellipse from '../../assets/ellipsis.png'
import view from '../../assets/view.png'
import trash from '../../assets/trash.png'
import Button from '../Button'

interface TableProps {
    documents: Documento[]
}

const Table: React.FC<TableProps> = ({ documents }) => {
    const { data, error, isLoading } = useFetchDocumentosQuery()
    const [deleteDocumento] = useDeleteDocumentoMutation()
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const handleToggleDropdown = (id: number) => {
        setOpenDropdown((prev) => (prev === id ? null : id))
    }

    const handleView = (id: number) => {
        console.log(`Visualizar documento com ID: ${id}`)
        setOpenDropdown(null)
    }

    const handleDelete = async (id: number) => {
        try {
            await deleteDocumento(id).unwrap()
            alert('Documento excluído com sucesso!')
            setOpenDropdown(null)
        } catch (error) {
            console.error('Erro ao excluir documento:', error)
            alert('Erro ao excluir documento.')
        }
    }

    const totalDocumentos = data?.length ?? 0
    const totalValorTributos = data?.reduce((acc, doc) => acc + doc.valorTotalTributos, 0) ?? 0
    const totalValorLiquido = data?.reduce((acc, doc) => acc + doc.valorLiquido, 0) ?? 0

    const emitentesUnicos = new Set(data?.map(doc => doc.emitente))
    const totalEmitentes = emitentesUnicos.size

    const indexOfLastDocument = currentPage * itemsPerPage
    const indexOfFirstDocument = indexOfLastDocument - itemsPerPage
    const currentDocuments = data?.slice(indexOfFirstDocument, indexOfLastDocument)

    const nextPage = () => {
        if (currentPage < Math.ceil(totalDocumentos / itemsPerPage)) {
            setCurrentPage(prev => prev + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar os documentos!</p>

    return (
        <>
            <Container>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>Nome do Documento</th>
                                <th>Emitente</th>
                                <th>Valor Total Tributos</th>
                                <th>Valor Líquido</th>
                                <th>Data de Criação</th>
                                <th>Última Atualização</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDocuments?.map((doc) => (
                                <tr key={doc.id}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <p>Cod.{doc.id}</p>
                                        {doc.nomeDoDocumento}
                                    </td>
                                    <td>{doc.emitente}</td>
                                    <td>R${doc.valorTotalTributos.toFixed(2)}</td>
                                    <td>R${doc.valorLiquido.toFixed(2)}</td>
                                    <td>{new Date(doc.createdAt).toLocaleDateString()}</td>
                                    <td>{new Date(doc.updatedAt).toLocaleDateString()}</td>
                                    <td>
                                        <span>
                                            <img
                                                src={ellipse}
                                                alt="ellipsis"
                                                onClick={() => handleToggleDropdown(doc.id)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            {openDropdown === doc.id && (
                                                <DropdownMenu>
                                                    <button onClick={() => handleView(doc.id)}>
                                                        <span>
                                                            <img src={view} alt="view" />
                                                        </span>{' '}
                                                        Visualizar
                                                    </button>
                                                    <button onClick={() => handleDelete(doc.id)}>
                                                        <span>
                                                            <img src={trash} alt="trash" />
                                                        </span>{' '}
                                                        Excluir documento
                                                    </button>
                                                </DropdownMenu>
                                            )}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>
                                    <strong>Total</strong> {totalDocumentos} documentos
                                </td>
                                <td>
                                    <strong>nº de Emitentes</strong> {totalEmitentes} emitente(s)
                                </td>
                                <td>
                                    <strong>Total Valor Tributos</strong> R${totalValorTributos.toFixed(2)}
                                </td>
                                <td>
                                    <strong>Total Valor Líquido</strong> R${totalValorLiquido.toFixed(2)}
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </Container>
            <Button prevPage={prevPage} nextPage={nextPage} />
        </>
    )
}

export default Table
