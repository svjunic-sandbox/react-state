import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '~/rootReducer';

import testState from './State/Test/index';

export default configureStore({
  reducer: {
    test: testState.reducer,
  },
});
