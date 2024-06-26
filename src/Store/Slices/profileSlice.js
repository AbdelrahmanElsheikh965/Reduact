import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    addUserInfo: (state, action) => {
      state.user_data = action.payload;
    }
  }
});

export default profileSlice.reducer;
export const { addUserInfo } = profileSlice.actions;