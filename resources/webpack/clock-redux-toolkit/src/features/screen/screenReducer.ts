import { createSlice } from '@reduxjs/toolkit';

const initialState: IScreenState = {};

const screenState = createSlice({
  name: 'screen',
  initialState,
  reducers: {},
});

export default screenState.reducer;
