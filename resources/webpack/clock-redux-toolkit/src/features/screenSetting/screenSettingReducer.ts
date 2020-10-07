import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: IScreenSettingState = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontColor: { r: 0, g: 0, b: 0, a: 1 },
  backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
  enabledShowMilliseconds: true,
};

//export const setFontSize = actionCreator<string | number>('SET_FONTSIZE');
//export const setFontFamily = actionCreator<string>('SET_FONTFAMILY');
//export const setFontWeight = actionCreator<string | number>('SET_FONTWEIGHT');
//export const setFontColor = actionCreator<IColor>('SET_FONTCOLOR');
//export const setBackgroundColor = actionCreator<IColor>('SET_BACKGROUNDCOLOR');
//export const setEnabledShowMilliseconds = actionCreator<boolean>('SET_ENABLEDSHOWMILLISECONDS');

const testState = createSlice({
  name: 'screenSetting',
  initialState,
  reducers: {
    setFontSize: (state, { payload }) => {
      const fontSize = typeof payload === 'string' ? parseInt(payload, 10) : payload;
      return { ...state, fontSize };
    },
    setFontFamily: (state, { payload }) => {
      return { ...state, fontFamily: payload };
    },
    setFontWeight: (state, { payload }) => {
      const fontWeight = typeof payload === 'string' ? parseInt(payload, 10) : payload;
      return { ...state, fontWeight };
    },
    setFontColor: (state, { payload }) => {
      return { ...state, fontColor: payload };
    },
    setBackgroundColor: (state, { payload }) => {
      return { ...state, backgroundColor: payload };
    },
    setEnabledShowMilliseconds: (state, { payload }) => {
      return { ...state, enabledShowMilliseconds: payload };
    },
  },
});

export const { setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds } = testState.actions;

export default testState.reducer;
