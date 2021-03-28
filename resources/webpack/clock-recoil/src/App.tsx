import React from 'react';

import TodoList1 from '~/components/TodoList1';
import TodoList2 from '~/components/TodoList2';

import { RecoilRoot } from 'recoil';

// atom : stateの保持
// selector :stateを動的に変更する関数

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TodoList1></TodoList1>
      <TodoList2></TodoList2>
    </RecoilRoot>
  );
};

export default App;
