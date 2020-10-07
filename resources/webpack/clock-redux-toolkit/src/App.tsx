import React, { useState } from 'react';
import store from '~/store.ts';

// container
import Test from '~/container/test/index.tsx';

import { Provider } from 'react-redux';

const App: React.FC = () => {
  //<Screen />
  //<ScreenSetting />
  return (
    <Provider store={store}>
      <div className="App">
        <hr className="hr" />
        <Test></Test>
        <hr className="hr" />
      </div>
    </Provider>
  );
};

export default App;
