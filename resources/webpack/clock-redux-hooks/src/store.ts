import { compose, applyMiddleware, combineReducers, createStore, AnyAction } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

import { IScreenState, ScreenReducer } from '~/State/Screen/reducer.ts';
import { IScreenSettingState, ScreenSettingReducer } from '~/State/ScreenSetting/reducer.ts';
import { TestReducer } from '~/State/Test/reducer.ts';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

export type AppState = {
  ScreenReducer: IScreenState;
  ScreenSettingReducer: IScreenSettingState;
  TestReducer: ITestState;
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const middlewares = [];
const thunk: ThunkMiddleware<AppState, AnyAction> = thunkMiddleware;

const store = createStore(
  // これで複数のステートを扱う的な感じに
  combineReducers<AppState>({
    ScreenReducer,
    ScreenSettingReducer,
    TestReducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
  //applyMiddleware(thunk)
);

export default store;
