import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: {},
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      const { products } = action.payload;
      products.forEach((product) => {
        // Check if the product already exists in the products array
        const existingProduct = state.products.find(
          (a) => a._id === product._id
        );

        if (!existingProduct) {
          // Add the product to the array if it doesn't already exist
          state.products.push(product);
        }
      });
      state.pagination = action.payload.pagination;
    },
    createNewProduct: (state, action) => {
      const { product: newProduct } = action.payload;
      state.products.unshift(newProduct);
    },
    deleteSingleProduct: (state, action) => {
      const { slug } = action.payload;

      state.products = state.products.filter(
        (product) => product.slug !== slug
      );
    },

    updateSingleProduct: (state, action) => {
      const { product } = action.payload;

      const newArray = state.products.map((item) => {
        if (item._id == product._id) {
          return {
            ...product,
          };
        }
        return item;
      });
      state.products = newArray;
    },
  },
});

export const {
  getProducts,
  createNewProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = productSlice.actions;
export default productSlice.reducer;
