import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const documentosApi = createApi({
    reducerPath: 'documentosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://documentos-api-production.up.railway.app/' }),
    endpoints: (builder) => ({
        fetchDocumentos: builder.query<Documento[], void>({
            query: () => 'documentos',
        }),
    }),
});

export const { useFetchDocumentosQuery } = documentosApi