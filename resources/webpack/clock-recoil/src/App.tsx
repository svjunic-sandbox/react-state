import React, { useState } from 'react';
//import store from '~/store';

import TodoList from '~/Components/TodoList';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TodoList></TodoList>
    </RecoilRoot>
  );
};

export default App;
