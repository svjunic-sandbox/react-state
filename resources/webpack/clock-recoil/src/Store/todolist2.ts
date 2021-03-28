import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState2',
  default: [] as ITodoList,
});
