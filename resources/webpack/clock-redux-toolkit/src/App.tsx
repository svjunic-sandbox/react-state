import React, { useState } from 'react';
import store from '~/store.ts';

// container
import Screen from '~/container/screen/index.tsx';
import ScreenSetting from '~/container/screenSetting/index.tsx';
import Test from '~/container/test/index.tsx';

import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Screen />
        <hr className="hr" />
        <ScreenSetting />
        <hr className="hr" />
        <Test></Test>
      </div>
    </Provider>
  );
};

export default App;
