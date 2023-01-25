import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "../models/api";
import type { IValue } from "../models/services/value";

export const valueApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VALUE_SERVICE || "http://localhost:4001",
  }),
  tagTypes: ["Value", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  reducerPath: "value-service-api",
  endpoints: (build) => ({
    // GET all values start region
    getAllValues: build.query<Response<IValue[]>, any>({
      query: () => `value`,
    }),
    // GET all values end region

    // GET one value start region
    getOneValue: build.query<Response<IValue>, string>({
      query: (id) => `value/${id}`,
      providesTags: (result, error, id) =>
        result
          ? [{ type: "Value", id }]
          : error?.status === 401
          ? ["UNAUTHORIZED"]
          : ["UNKNOWN_ERROR"],
    }),
    // GET one value end region

    // POST value start region
    addValue: build.mutation<IValue, Omit<IValue, "id">>({
      query: (body) => ({
        url: "value",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Value"],
    }),
    // POST value end region

    // PATCH value start region
    editValue: build.mutation<IValue, Partial<IValue> & Pick<IValue, "id">>({
      query: (body) => ({
        url: `value/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Value", id: arg.id },
      ],
    }),
    // PATCH value end region
  }),
  // DELETE value start region
});

export const { useGetAllValuesQuery, useGetOneValueQuery } = valueApi;
