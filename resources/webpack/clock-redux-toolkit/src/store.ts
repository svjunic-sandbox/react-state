import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '~/rootReducer';

import testState from './State/Test';

const store = configureStore({
  test: testState.reducer,
});

//export type AppDispatch = typeof store.dispatch;

export default store;
