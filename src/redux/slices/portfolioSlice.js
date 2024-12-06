import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  portfolios: [],
  portfolio: {},
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
  page: 1,
  totalPages: 1,
  totalPortfolio: 0,
};

const API_URL = "https://fe-react-agency-api.vercel.app/";
const API_KEY = "5a9b5dca-6a81-404d-a49c-72c6b45dbe4a";

export const getPortfolio = createAsyncThunk(
  "portfolio/get",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}portfolios?page=${page}&limit=8`,
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
export const getPortfolioDetail = createAsyncThunk(
  "portfolio/detail",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}portfolios/${data}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET PORTFOLIO
    builder
      .addCase(getPortfolio.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.portfolios = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalPortfolio = action.payload.total;
      })
      .addCase(getPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    // GET PORTFOLIO DETAIL
    builder
      .addCase(getPortfolioDetail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getPortfolioDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.portfolio = action.payload;
      })
      .addCase(getPortfolioDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
