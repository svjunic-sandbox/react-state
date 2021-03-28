import React from 'react';

import TodoList1 from '~/components/TodoList1';
import TodoList2 from '~/components/TodoList2';

import { RecoilRoot } from 'recoil';
import Lastupdate from './components/Lastupdate';

// atom : stateの保持
// selector :stateを動的に変更する関数

const pStyle = {
  fontSize: '1.6rem',
};

const hrStyle = {
  margin: '1.4rem 0',
};

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <p style={pStyle}>todolist1とtodolist2、それぞれatomを持っている</p>
      <p style={pStyle}>どちらかが更新されたらlastupdateのselecterによる購読の検知から更新日を更新する</p>
      <hr style={hrStyle} />
      <Lastupdate></Lastupdate>
      <TodoList1></TodoList1>
      <TodoList2></TodoList2>
    </RecoilRoot>
  );
};

export default App;
