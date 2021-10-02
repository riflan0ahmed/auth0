import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthState {
  value: number;
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  value: 0,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    updateAuthentication: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth.value;
export const selectAuth = (state: RootState) =>
  state.auth.isAuthenticated as boolean;

export default authSlice.reducer;
