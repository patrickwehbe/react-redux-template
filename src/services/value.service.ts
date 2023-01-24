import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Response } from '../models/api'
import type { IValue } from '../models/services/value'

export const valueApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VALUE_SERVICE || 'http://localhost:4001' }),
  reducerPath: 'value-service-api',
  endpoints: (build) => ({
    getAllValues: build.query<Response<IValue[]>, string>({
      query: () => `value`,
    }),
    
  }),
},
)

export const { useGetAllValuesQuery } = valueApi