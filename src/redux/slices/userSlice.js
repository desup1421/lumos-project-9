import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  isError: null,
  message: null,
  isSuccess: false,
};

const API_URL = "https://fe-react-agency-api.vercel.app/";
const API_KEY = "5a9b5dca-6a81-404d-a49c-72c6b45dbe4a";

export const getUsers = createAsyncThunk(
  "user/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}teams?usernames[0]=emir&usernames=deni.irawan`,
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL USERS
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.message = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isError = null;
        state.message = "User fetched successfully";
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
