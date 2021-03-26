import React, { useState } from 'react';
import store from '~/store.ts';

// container
import Screen from '~/Container/Screen/index.tsx';
import ScreenSetting from '~/Container/ScreenSetting/index.tsx';
import Test from '~/Container/Test/index.tsx';

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
