import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: IScreenState = {};

const screenState = createSlice({
  name: 'screen',
  initialState,
  reducers: {},
});

export default screenState.reducer;
