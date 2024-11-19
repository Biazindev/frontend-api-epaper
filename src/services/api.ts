import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Documento {
    id: number
    updatedAt: string | number | Date
    createdAt: string | number | Date
    nomeDoDocumento: string
    numeroDoDocumento: string
    emitente: string
    valorTotalTributos: number
    valorLiquido: number
}

export const documentosApi = createApi({
    reducerPath: 'documentosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://documentos-api-production.up.railway.app/' }),
    endpoints: (builder) => ({
        fetchDocumentos: builder.query<Documento[], void>({
            query: () => 'documentos',
        }),
        createDocumento: builder.mutation<Documento, Partial<Documento>>({
            query: (novoDocumento) => ({
                url: 'documentos',
                method: 'POST',
                body: novoDocumento,
            }),
        }),
        deleteDocumento: builder.mutation<void, number>({
            query: (id) => ({
                url: `documentos/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useFetchDocumentosQuery,
    useCreateDocumentoMutation,
    useDeleteDocumentoMutation,
} = documentosApi
