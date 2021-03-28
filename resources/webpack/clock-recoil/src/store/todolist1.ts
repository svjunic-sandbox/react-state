import { atom } from 'recoil';

export default atom({
  key: 'todoListState1', //これがatomのキーになる。重複すると壊れる
  default: [
    {
      id: 'item1',
      text: 'てきすと！',
    },
  ] as ITodoList,
});
