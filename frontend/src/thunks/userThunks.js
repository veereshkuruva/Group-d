import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../config";

// First, create the thunk

// thunk action
export const fetchUser = createAsyncThunk("user/fetchusers", async (user) => {
  const response = await axios.post(
    `${config.API_URL}/admin/users`,
    {},
    {
      headers: {
        user,
      },
    }
  );

  return response.data;
});
