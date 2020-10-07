// TODO: 基本できてからためそう
// https://qiita.com/m0a/items/703d64c74e43cb392a64
// import actionCreatorFactory from 'typescript-fsa';

// 普通の書き方
// export type Action = {
//   type: 'SET_TEXT';
//   payload: string;
// };

import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const init = actionCreator('INIT');
