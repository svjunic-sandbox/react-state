import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export default configureStore({
  reducer: rootReducer,
});

// 下記のように記述できるからrootReducerの必要性がよくわからない
//
//import testReducer from './features/test/testReducer';
//import screenReducer from './features/screen/screenReducer';
//import screenSettingReducer from './features/screenSetting/screenSettingReducer';
//
//export default configureStore({
//  reducer: {
//    test: testReducer,
//    screen: screenReducer,
//    screenSetting: screenSettingReducer,
//  },
//});
