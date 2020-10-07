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

export const asyncGetData = createAsyncThunk<headServerTimeReturnType>(
  'servertime/head',
  async (): Promise<headServerTimeReturnType> => {
    const asyncResp = await axios.head('./');

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
    //// {{{ typescripotだと型がうまく行かず、この書き方はできないぽい
    //  [`${asyncGetData.fulfilled}`]: (state, action) => {
    //    return {
    //      ...state,
    //    };
    //  },
    //// }}}
    builder.addCase(asyncGetData.pending, (state, action) => {
      console.log(action.type);
      return {
        ...state,
      };
    });
    builder.addCase(asyncGetData.fulfilled, (state, action) => {
      console.log(action.type);
      return {
        ...state,
        apiResult: action.payload.date,
      };
    });
    builder.addCase(asyncGetData.rejected, (state, action) => {
      console.log(action.type);
      return {
        ...state,
      };
    });
  },
});

export const { setText } = testState.actions;

export default testState.reducer;
