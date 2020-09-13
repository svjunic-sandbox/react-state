import React, { useState, createContext, useReducer } from 'react';

// component
import Screen from '~/Components/Screen.tsx';
import ScreenSetting from '~/Components/ScreenSetting.tsx';
import Test from '~/Components/Test.tsx';

import { initialTestState } from './State/Test/state';
import { testReducer } from './State/Test/reducer';

import { initialScreenState } from './State/Screen/state';
import { screenReducer } from './State/Screen/reducer';

import { initialScreenSettingState } from './State/ScreenSetting/state';
import { screenSettingReducer } from './State/ScreenSetting/reducer';

// これはReducerとActionが分割できないContextAPIではつらそう {{{
//const AppStateContext = createContext({
//  ScreenState,
//  ScreenSettingState,
//  TestStateContext,
//});
// }}}

export const ScreenContext = createContext({} as IScreenContext);
export const ScreenSettingContext = createContext({} as IScreenSettingContext);
export const TestContext = createContext({} as ITestContext);

const App: React.FC = () => {
  const [screenState, screenDispatch] = useReducer(screenReducer, initialScreenState);
  const [screenSettingState, screenSettingDispatch] = useReducer(screenSettingReducer, initialScreenSettingState);
  const [testState, testDispatch] = useReducer(testReducer, initialTestState);

  return (
    <div className="App">
      <ScreenContext.Provider value={{ screenState, screenSettingState }}>
        <Screen />
      </ScreenContext.Provider>
      <ScreenSettingContext.Provider value={{ screenSettingState, screenSettingDispatch }}>
        <ScreenSetting />
      </ScreenSettingContext.Provider>
      <hr className="hr" />
      <TestContext.Provider value={{ testState, testDispatch } as ITestContext}>
        <Test></Test>
      </TestContext.Provider>
    </div>
  );
};

export default App;
