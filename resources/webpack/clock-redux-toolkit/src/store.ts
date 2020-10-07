import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '~/rootReducer';

import testReducer from './features/test/testReducer';
import screenReducer from './features/screen/screenReducer';
import screenSettingReducer from './features/screenSetting/screenSettingReducer';

export default configureStore({
  reducer: {
    test: testReducer,
    screen: screenReducer,
    screenSetting: screenSettingReducer,
  },
});
