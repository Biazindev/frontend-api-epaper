import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const documentosApi = createApi({
    reducerPath: 'documentosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        fetchDocumentos: builder.query<Documento[], void>({
            query: () => 'documentos',
        }),
    }),
});

export const { useFetchDocumentosQuery } = documentosApi;