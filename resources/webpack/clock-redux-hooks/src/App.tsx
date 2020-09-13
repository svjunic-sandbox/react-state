import React, { useState } from 'react';
import store from '~/store.ts';

// component
import Screen from '~/Components/Screen.tsx';
import ScreenSetting from '~/Components/ScreenSetting.tsx';
import Test from '~/Components/Test.tsx';

import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Screen />
        <ScreenSetting />
        <hr className="hr" />
        <Test></Test>
        <hr className="hr" />
      </div>
    </Provider>
  );
};

export default App;
