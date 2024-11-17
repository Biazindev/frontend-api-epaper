import { configureStore } from '@reduxjs/toolkit'
import { documentosApi } from '../../services/api'

export const store = configureStore({
    reducer: {
        [documentosApi.reducerPath]: documentosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(documentosApi.middleware),
})
