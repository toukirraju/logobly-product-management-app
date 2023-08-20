import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          //   response store in local storege
          localStorage.setItem(
            "accessToken",
            JSON.stringify(data?.payload?.accessToken)
          );

          dispatch(
            userLoggedIn({
              accessToken: data?.payload?.accessToken,
              user: data?.payload?.user,
            })
          );
        } catch (error) {}
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;

          dispatch(userLoggedOut());
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegistrationMutation } =
  authApi;
