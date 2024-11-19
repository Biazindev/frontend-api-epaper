import { SetStateAction, useState } from "react"
import filter from "../../assets/filter.png"
import searchIcon from "../../assets/search.png"
import help from "../../assets/help.png"
import info from "../../assets/info.png"
import * as S from "./styles"
import { useNavigate } from "react-router-dom"

interface Documento {
    id: number
    nomeDoDocumento: string
    numeroDoDocumento: string
    emitente: string
    valorTotalTributos: number
    valorLiquido: number
    createdAt: string
    updatedAt: string
}


const Card: React.FC<{ onApplyFilter: (documents: Documento[]) => void; onOpenModal: () => void }> = ({ onApplyFilter, onOpenModal }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const navigate = useNavigate()
    const [filters, setFilters] = useState({
        creationPeriod: "",
        documentType: "",
        issuer: "",
        taxValue: "",
        netValue: "",
    })

    const handleNovoDocumento = () => {
        navigate("/modal")
    }

    const [documents, setDocuments] = useState<Documento[]>([
        {
            id: 1,
            nomeDoDocumento: "Nota Fiscal 001",
            numeroDoDocumento: "123456",
            emitente: "Emitente A",
            valorTotalTributos: 150.5,
            valorLiquido: 1000.0,
            createdAt: "2024-01-01",
            updatedAt: "2024-01-05",
        },
    ])

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    }

    const handleFilterChange = (field: string, value: string | number) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const applyFilters = () => {
        let filtered = documents;

        if (filters.creationPeriod) {
            filtered = filtered.filter(
                (doc) =>
                    new Date(doc.createdAt).toLocaleDateString() ===
                    new Date(filters.creationPeriod).toLocaleDateString()
            )
        }
        if (filters.documentType) {
            filtered = filtered.filter((doc) =>
                doc.nomeDoDocumento.includes(filters.documentType)
            )
        }
        if (filters.issuer) {
            filtered = filtered.filter((doc) =>
                doc.emitente.includes(filters.issuer)
            )
        }
        if (filters.taxValue) {
            filtered = filtered.filter(
                (doc) => doc.valorTotalTributos >= Number(filters.taxValue)
            )
        }
        if (filters.netValue) {
            filtered = filtered.filter(
                (doc) => doc.valorLiquido >= Number(filters.netValue)
            )
        }

        onApplyFilter(filtered)
        setIsSidebarOpen(false)
    };

    const clearFilters = () => {
        setFilters({
            creationPeriod: "",
            documentType: "",
            issuer: "",
            taxValue: "",
            netValue: "",
        });
        onApplyFilter(documents);
    }

    return (
        <>
            <S.Container>
                <S.Documents>
                    <div>
                        <span>Documentos</span>
                        <p>Crie, gerencie e visualize os documentos</p>
                    </div>
                    <S.Filter>
                        <S.InputContainer>
                            <input type="text" placeholder="Buscar documentos" />
                            <img src={searchIcon} alt="search" />
                        </S.InputContainer>
                        <button type="button" onClick={toggleSidebar}>
                            <img src={filter} alt="filter" />
                            Filtrar
                        </button>
                    </S.Filter>
                </S.Documents>
            </S.Container>
            <S.DocType>
                <S.DocContainer>
                    <S.Adjuste>
                        <div>
                            <label htmlFor="origin">Origem do documento</label>
                            <img src={help} alt="help" />
                        </div>
                        <select name="origin" id="origin">
                            <option value="digitalizado">Digitalizado</option>
                            <option value="nuvem">Nuvem</option>
                        </select>
                    </S.Adjuste>
                    <S.Adjuste>
                        <div>
                            <label htmlFor="type">Tipo documental</label>
                            <img src={help} alt="help" />
                        </div>
                        <select name="type" id="type">
                            <option value="notaFiscal">Nota fiscal serviço</option>
                            <option value="default">Default</option>
                        </select>
                    </S.Adjuste>
                </S.DocContainer>
                <button onClick={onOpenModal}>
                    + Novo documento
                </button>
            </S.DocType>
            <S.ButtonContainer>
                <button onClick={onOpenModal}>
                    +
                </button>
            </S.ButtonContainer>
            {isSidebarOpen && (
                <>
                    <S.Overlay onClick={toggleSidebar} />
                    <S.Sidebar>
                        <S.SidebarHeader>
                            <h3>Filtrar Documentos</h3>
                            <button onClick={toggleSidebar}>X</button>
                        </S.SidebarHeader>
                        <h6>
                            Indique os dados necessários para realizar a filtragem
                        </h6>
                        <S.Info>
                            <img src={info} alt="info" />
                            <p>
                                Selecione o tipo de documento necessário para, a partir dele,
                                selecionar os tipos de índices para a filtragem.
                            </p>
                        </S.Info>
                        <S.SidebarContent>
                            <label>Período de Criação</label>
                            <input
                                type="date"
                                value={filters.creationPeriod}
                                onChange={(e) =>
                                    handleFilterChange("creationPeriod", e.target.value)
                                }
                            />
                            <label>Tipo de Documento</label>
                            <select
                                value={filters.documentType}
                                onChange={(e) =>
                                    handleFilterChange("documentType", e.target.value)
                                }
                            >
                                <option value="notaFiscal">Nota fiscal de serviço</option>
                                <option value="default">Default</option>
                            </select>
                            <label>Emitente</label>
                            <input
                                type="text"
                                placeholder="Razão social do emitente"
                                value={filters.issuer}
                                onChange={(e) =>
                                    handleFilterChange("issuer", e.target.value)
                                }
                            />
                            <label>Valor do Tributo</label>
                            <input
                                type="number"
                                placeholder="Valor em R$"
                                value={filters.taxValue}
                                onChange={(e) =>
                                    handleFilterChange("taxValue", Number(e.target.value))
                                }
                            />
                            <label>Valor Líquido</label>
                            <input
                                type="number"
                                placeholder="Valor em R$"
                                value={filters.netValue}
                                onChange={(e) =>
                                    handleFilterChange("netValue", Number(e.target.value))
                                }
                            />
                        </S.SidebarContent>
                        <S.SidebarFooter>
                            <button onClick={clearFilters}>Limpar</button>
                            <button onClick={applyFilters}>Filtrar</button>
                        </S.SidebarFooter>
                    </S.Sidebar>
                </>
            )}

        </>
    )
}

export default Card
