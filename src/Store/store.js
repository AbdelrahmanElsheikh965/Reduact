import { configureStore } from "@reduxjs/toolkit";
import profileData from "./Slices/profileSlice";
import productsData from "./Slices/productsSlice";

export default configureStore({
  reducer: {
    profile_information: profileData,
    products_information: productsData,
  },
});