import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  blog: {},
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
  page: 1,
  totalPages: 1,
  totalBlog: 0,
};

const API_URL = "https://fe-react-agency-api.vercel.app/";
const API_KEY = "5a9b5dca-6a81-404d-a49c-72c6b45dbe4a";

export const getAllBlog = createAsyncThunk(
  "blog/getAllBlog",
  async (page, {rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}blogs?page=${page}`,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getBlogDetail = createAsyncThunk(
  "blog/getDetail",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}blogs/${data}` ,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL BLOG
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalBlog = action.payload.total;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    // GET BLOG DETAIL
    builder
      .addCase(getBlogDetail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getBlogDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(getBlogDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default blogSlice.reducer;
