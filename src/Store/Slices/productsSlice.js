import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/axios";

export const getProductsThunk = createAsyncThunk(

  "products",
  async () => {
    const results = await axiosInstance.get("/products?limit=6");
    return results.data;
  }

);

export const productsSlice = createSlice({
  name: "products",
  initialState: { products:{} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload; // response
      state.pagination = {
        total: action.payload.total,
        skip: action.payload.skip,
        limit: action.payload.limit,
      };
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;