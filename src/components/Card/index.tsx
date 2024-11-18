import { SetStateAction, useState } from "react"
import filter from '../../assets/filter.png'
import searchIcon from '../../assets/search.png'
import help from '../../assets/help.png'
import info from '../../assets/info.png'
import * as S from './styles'

interface Document {
  id: number;
  nomeDoDocumento: string;
  emitente: string;
  valorTotalTributos: number;
  valorLiquido: number;
  createdAt: string;
  updatedAt: string;
}

const Card = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [filters, setFilters] = useState({
    creationPeriod: "",
    documentType: "",
    issuer: "",
    taxValue: "",
    netValue: "",
  })

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      nomeDoDocumento: "Nota Fiscal 001",
      emitente: "Emitente A",
      valorTotalTributos: 150.5,
      valorLiquido: 1000.0,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-05",
    },
  ])

  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const closeModal = () => {
    setFilteredDocuments([])
  }

  const handleFilterChange = (field: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const applyFilters = () => {
    let filtered = documents

    if (filters.creationPeriod) {
      filtered = filtered.filter((doc) =>
        new Date(doc.createdAt).toLocaleDateString() === new Date(filters.creationPeriod).toLocaleDateString()
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
      filtered = filtered.filter((doc) => doc.valorTotalTributos >= Number(filters.taxValue))
    }
    if (filters.netValue) {
      filtered = filtered.filter((doc) => doc.valorLiquido >= Number(filters.netValue))
    }

    setFilteredDocuments(filtered)
    setIsSidebarOpen(false)
  }

  const clearFilters = () => {
    setFilters({
      creationPeriod: "",
      documentType: "",
      issuer: "",
      taxValue: "",
      netValue: "",
    })
    setFilteredDocuments(documents)
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
      {isSidebarOpen && (
        <>
          <S.Overlay onClick={toggleSidebar} />
          <S.Sidebar>
            <S.SidebarHeader>
              <h3>Filtrar Documentos</h3>
              <button onClick={toggleSidebar}>X</button>
            </S.SidebarHeader>
            <h6>Indique os dados necessários para realizar a filtragem</h6>
            <S.Info>
              <img src={info} alt="info" />
              <p>
                Selecione o tipo de documento necessário para, a partir dele, selecionar os tipos de índices para a filtragem.
              </p>
            </S.Info>
            <S.SidebarContent>
              <label>Período de Criação</label>
              <input
                type="date"
                value={filters.creationPeriod}
                onChange={(e) => handleFilterChange("creationPeriod", e.target.value)}
              />
              <label>Tipo de Documento</label>
              <select
                value={filters.documentType}
                onChange={(e) => handleFilterChange("documentType", e.target.value)}
              >
                <option value="notaFiscal">Nota fiscal de serviço</option>
                <option value="default">Default</option>
              </select>
              <label>Emitente</label>
              <input
                type="text"
                placeholder="Razão social do emitente"
                value={filters.issuer}
                onChange={(e) => handleFilterChange("issuer", e.target.value)}
              />
              <label>Valor do Tributo</label>
              <input
                type="number"
                placeholder="Valor em R$"
                value={filters.taxValue}
                onChange={(e) => handleFilterChange("taxValue", Number(e.target.value))}
              />
              <label>Valor Líquido</label>
              <input
                type="number"
                placeholder="Valor em R$"
                value={filters.netValue}
                onChange={(e) => handleFilterChange("netValue", Number(e.target.value))}
              />
            </S.SidebarContent>
            <S.SidebarFooter>
              <button onClick={applyFilters}>Limpar</button>
              <button onClick={clearFilters}>Filtrar</button>
            </S.SidebarFooter>
          </S.Sidebar>
        </>
      )}

      {filteredDocuments.length > 0 && (
        <S.Modal>
          <h2>Resultados da Busca</h2>
          <S.DocumentList>
            {filteredDocuments.map((doc) => (
              <div key={doc.id}>
                <h3>{doc.nomeDoDocumento}</h3>
                <p>Emitente: {doc.emitente}</p>
                <p>Valor do Tributo: R${doc.valorTotalTributos.toFixed(2)}</p>
                <p>Valor Líquido: R${doc.valorLiquido.toFixed(2)}</p>
                <p>Data de Criação: {new Date(doc.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </S.DocumentList>
          <button onClick={closeModal}>Fechar</button>
        </S.Modal>
      )}
    </>
  )
}

export default Card
