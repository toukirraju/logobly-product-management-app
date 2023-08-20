import { apiSlice } from "../../api/apiSlice";
import {
  createNewProduct,
  deleteSingleProduct,
  updateSingleProduct,
} from "./productSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        const params = new URLSearchParams({ page, limit });
        return `/products?${params.toString()}`;
      },
      providesTags: ["products"],
    }),

    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            createNewProduct({
              product: data.payload,
            })
          );
        } catch (error) {}
      },
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/products/${data.slug}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            updateSingleProduct({
              product: data.payload,
            })
          );
        } catch (error) {}
      },
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (slug) => ({
        url: `/products/${slug}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            deleteSingleProduct({
              slug: arg,
            })
          );
        } catch (error) {}
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
