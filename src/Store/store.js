import { configureStore } from "@reduxjs/toolkit";
import dd from "./Slices/profileSlice";

export default configureStore({
  reducer: {
    ee: dd,
  },
});