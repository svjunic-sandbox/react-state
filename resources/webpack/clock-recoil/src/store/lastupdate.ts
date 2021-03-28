import { selector } from 'recoil';

import todoListState1 from '~/store/todolist1';
import todoListState2 from '~/store/todolist2';

export const lastupdateSelector = selector({
  key: 'Lastupdate',
  get: ({ get }) => {
    return [get(todoListState1), get(todoListState2)];
  },
});
