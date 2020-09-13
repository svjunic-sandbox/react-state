import React, { useState, createContext, useReducer, setGlobal, addReducer, useDispatch } from 'reactn';
import Test from '~/Components/Test.tsx';

import axios from 'axios';

setGlobal({
  text: 'なまこは食べれる',
  apiResult: 'だみーてきすと',
  isLoading: false,
});

addReducer('setApiResult', (global, dispatch, text) => {
  return { apiResult: text };
});

addReducer('setIsLoading', (global, dispatch, isLoading) => {
  return { isLoading };
});

addReducer('asyncGetDataReducer', async (global, dispatch, action) => {
  dispatch.setIsLoading(true);

  const res = await axios.head('/');

  await new Promise(function (resolve) {
    // 確認のためにちょっと送らせてみるよ！
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  dispatch.setApiResult(res.headers.date);

  dispatch.setIsLoading(false);

  return;
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Test />
    </div>
  );
};

export default App;
