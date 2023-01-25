import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "../models/api";
import type { User } from "../models/services/auth";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4002" }),
  reducerPath: "org-service-api",
  endpoints: (build) => ({
    getUsers: build.query<Response<User[]>, string>({
      query: () => `user`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
