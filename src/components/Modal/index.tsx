import React, { useState } from 'react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import { useCreateDocumentoMutation } from '../../services/api'
import { Detail, FormGrid, ModalContainer, Overlay, Upload, TextP, Loading, Feature, ContainerButton } from './styles'
import fileUp from '../../assets/file-up.png'
import fileUpB from '../../assets/file-up.png'
import { cores } from '../../styles'

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js'

interface Documento {
    nomeDoDocumento: string
    numeroDoDocumento: string
    emitente: string
    valorTotalTributos: number
    valorLiquido: number
}

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [uploadProgress, setUploadProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const [novoDocumento, setNovoDocumento] = useState<Documento>({
        nomeDoDocumento: '',
        numeroDoDocumento: '',
        emitente: '',
        valorTotalTributos: 0,
        valorLiquido: 0,
    })
    const [isLoading, setIsLoading] = useState(false)
    const [createDocumento] = useCreateDocumentoMutation()

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setIsUploading(true)
            const fileReader = new FileReader()

            fileReader.onprogress = (e) => {
                if (e.lengthComputable) {
                    const progress = Math.round((e.loaded / e.total) * 100)
                    setUploadProgress(progress)
                }
            }

            fileReader.onloadend = () => {
                setIsUploading(false)
                console.log("Upload concluído!")
                processPdf(file)
            }

            fileReader.readAsDataURL(file)
        }
    }

    const processPdf = (file: File) => {
        const reader = new FileReader()
        reader.onload = async (e: any) => {
            const pdfData = e.target.result
            try {
                const pdf = await getDocument(pdfData).promise
                const page = await pdf.getPage(1)
                const textContent = await page.getTextContent()
                const text = textContent.items.map((item: any) => item.str).join(' ')

                processPdfText(text)
            } catch (error) {
                console.error('Erro ao processar PDF:', error)
            }
        }

        reader.readAsArrayBuffer(file)
    }

    const processPdfText = (text: string) => {
        const nomeDoDocumento = extractNomeDoDocumento(text)
        const numeroDoDocumento = extractNumeroDoDocumento(text)
        const emitente = extractEmitente(text)
        const valorTotalTributos = extractValor(text, 'Valor Total de Tributos')
        const valorLiquido = extractValor(text, 'Valor Líquido')

        const documentoProcessado: Documento = {
            nomeDoDocumento,
            numeroDoDocumento,
            emitente,
            valorTotalTributos,
            valorLiquido,
        }

        setNovoDocumento(documentoProcessado)
        console.log('Documento processado:', documentoProcessado)
        enviarParaTabela(documentoProcessado)
    }

    const extractNomeDoDocumento = (text: string) => {
        const match = text.match(/Nome do Documento:\s*(.*?)\s*,/)
        return match ? match[1].trim() : ''
    }

    const extractNumeroDoDocumento = (text: string) => {
        const match = text.match(/Número do Documento:\s*(\d+)/)
        return match ? match[1].trim() : ''
    }

    const extractEmitente = (text: string) => {
        const match = text.match(/Emitente:\s*([^\d]+?)\s*,/)
        return match ? match[1].trim() : ''
    }

    const extractValor = (text: string, tipo: string): number => {
        const regex = new RegExp(`${tipo}:\\s*([0-9]+(?:[.,][0-9]{1,2})?)`, 'i')
        const match = text.match(regex)

        if (match) {
            const valor = match[1].replace(',', '.')
            return parseFloat(valor)
        }

        return 0
    }

    const enviarParaTabela = async (documento: Documento) => {
        try {
            const response = await createDocumento(documento).unwrap()
            console.log('Documento salvo com sucesso:', response)
            alert('Documento salvo com sucesso!')
        } catch (error) {
            console.error('Erro ao salvar documento:', error)
            alert('Erro ao salvar documento. Tente novamente.')
        }
    }

    const handleCreateDocumento = () => {
        enviarParaTabela(novoDocumento)
    }
    return (
        <Overlay>
            <ModalContainer>
                <h2>Criar Novo Documento</h2>
                <h6>Insira os dados necessários para criar</h6>
                <Detail>
                    <h4>0000</h4>
                </Detail>
                <FormGrid>
                    <div>
                        <label>Origem do documento</label>
                        <select>
                            <option disabled selected>Selecione a origem do documento</option>
                            <option>Digitalizado</option>
                            <option>Eletrônico</option>
                        </select>
                        <label>Tipo do documento</label>
                        <select>
                            <option value="" disabled selected>Selecionar tipo do documento</option>
                            <option>Contrato de prestação de serviço</option>
                        </select>
                    </div>
                </FormGrid>
                <Upload>
                    <img src={fileUp} alt="fileUp" />
                    <p>Arraste e solte aqui ou selecione o arquivo para upload</p>
                    <div>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                            id="file-upload"
                        />
                        <button
                            style={{
                                width: '216px',
                                height: '32px',
                                backgroundColor: '#ffff',
                                outline: 'none',
                                borderRadius: '4px',
                                borderStyle: 'none',
                                border: `1px solid ${cores.Neutral200}`,
                                cursor: 'pointer'
                            }}
                            type="button"
                            onClick={() => document.getElementById('file-upload')?.click()}
                        >
                            Procurar e selecionar arquivo
                        </button>
                    </div>
                    <TextP>Tamanho max.: 10MB</TextP>
                </Upload>
                <Loading>
                    <div>
                        <img style={{ width: '24px', height: '24px' }} src={fileUpB} alt="fileUpB" />
                    </div>
                    <span>
                        <div style={{ width: '528px', display: 'block' }}>
                            <p>Nome do arquivo.doc</p>
                            <div style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }}>
                                <div
                                    style={{
                                        height: '10px',
                                        width: `${uploadProgress}%`,
                                        backgroundColor: '#4caf50',
                                        borderRadius: '10px',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <span>x</span>
                    </span>
                </Loading>
                <Feature>
                    <span>Pré-visualizar</span>
                </Feature>
                <ContainerButton>
                    <button style={{
                        width: '88px',
                        height: '40px',
                        backgroundColor: '#ffff',
                        color: `${cores.Neutral700}`,
                        border: `1px solid ${cores.Neutral200}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }} onClick={onClose}>Cancelar</button>
                    <button style={{
                        width: '161px',
                        height: '40px',
                        backgroundColor: `${cores.primary500}`,
                        color: '#ffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }} onClick={handleCreateDocumento} disabled={isLoading}>
                        {isLoading ? 'Criando...' : 'Criar Documento'}
                    </button>
                </ContainerButton>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal
