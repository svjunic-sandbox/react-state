import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '~/rootReducer';

import testReducer from './features/test/testReducer';

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
