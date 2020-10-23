import { combineReducers } from '@reduxjs/toolkit';

import testReducer from './features/test/testReducer';
import screenReducer from './features/screen/screenReducer';
import screenSettingReducer from './features/screenSetting/screenSettingReducer';

export const rootReducer = combineReducers({
  test: testReducer,
  screen: screenReducer,
  screenSetting: screenSettingReducer,
});
