import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state = null, action) => {
      return action.payload;
    },
    logout: (state = null, action) => {
      return action.payload;
    },
    storeUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, storeUser } = authSlice.actions;

export default authSlice.reducer;
