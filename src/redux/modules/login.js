import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const kakaoLoginDB = createAsyncThunk(
  'login/kakaoLoginDB',
  async (code, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/oauth/kakao/callback?code=${code}`
      );
      window.location.replace('/');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: {
      userId: null,
      userName: null,
      token: null,
    },
    isLogin: false,
  },
  reducers: {
    // -----로그아웃
    logoutReducer: (state, action) => {
      state.userInfo.userId = null;
      state.userInfo.userName = null;
      state.userInfo.token = null;
      state.isLogin = false;
    },
    // -----
  },
  extraReducers: (builder) => {
    builder
      .addCase(kakaoLoginDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(kakaoLoginDB.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.result;
        state.isLogin = true;
      })
      .addCase(kakaoLoginDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { logoutReducer } = loginSlice.actions;

export default loginSlice;
