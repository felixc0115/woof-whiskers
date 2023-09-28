import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

//used to export action creators to be called inside components
export const authActions = authSlice.actions;

//export the reducer to be available to configureStore
export default authSlice.reducer;
