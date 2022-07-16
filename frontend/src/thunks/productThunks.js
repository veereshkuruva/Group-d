import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../config";

// First, create the thunk

// thunk action
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (search) => {
    const response = await axios.get(`${config.API_URL}/products`, {
      params: {
        keyword: search,
      },
    });

    return response.data;
  }
);
