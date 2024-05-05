import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    const request = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      userCredentials
    );
    const response = await request.data.data;
    localStorage.setItem("garirmela", JSON.stringify(response));
    return response;
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  return null;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    user: null,
    token: null,
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        const decodedUser = jwtDecode(action.payload.accessToken);
        state.user = decodedUser;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        state.token = null;
        state.isAuthenticated = false;
      });
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isAuthenticated = true;
      });
  },
});

export default userSlice.reducer;
