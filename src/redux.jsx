import { configureStore, createSlice } from "@reduxjs/toolkit";
const loadUsers = () => JSON.parse(localStorage.getItem("users")) || [];
const authSlice = createSlice({
  name: "auth",
  initialState: { users: loadUsers(), currentUser: null },
  reducers: {
    signUp: (state, action) => {
      state.users=[...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { signUp, login } = authSlice.actions;
 export const store = configureStore({ reducer: { 
  auth: authSlice.reducer,

 } });