/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setError } from "../features/errorSlice";
import { userLoggedOut } from "../features/auth/authSlice";

const url = "http://localhost:8000/api";
const baseQuery = fetchBaseQuery({
  baseUrl: url,
  credentials: "include",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      api.dispatch(userLoggedOut());
    }
    if (result.error) {
      //manual handle error here
      api.dispatch(setError(result.error));
    }
    return result;
  },
  tagTypes: ["products"],
  endpoints: (builder) => ({}),
});
