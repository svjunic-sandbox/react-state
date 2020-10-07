import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: ITestState = {
  text: 'first impression',
  apiEndpoint: '',
  apiResult: '',
};

type headServerTimeReturnType = {
  date: string;
};

const asyncGetData = createAsyncThunk<headServerTimeReturnType>(
  //hoge
  'servertime/head',
  async (arg, thunk): Promise<headServerTimeReturnType> => {
    const asyncResp = await axios.head('/');

    // 遅延の動作を確認するために無理やり遅延
    await new Promise(function (resolve) {
      setTimeout(() => {
        resolve();
      }, 5000);
    });

    return {
      date: asyncResp.headers.date,
    };
  }
);

const testState = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setText(state: ITestState, action: PayloadAction<string>) {
      return { ...state, text: action.payload };
    },
  },

  // redux-thunk
  extraReducers: (builder) => {
    builder.addCase(asyncGetData.fulfilled, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export const { setText } = testState.actions;

export default testState;
