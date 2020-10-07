// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64

import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { init, setText, asyncGetData } from '~/State/Test/action.ts';

//ここにstateの初期値を書く
export const initialState: ITestState = {
  text: 'first impression',
  apiEndpoint: '',
  apiResult: '',
};

export const TestReducer = reducerWithInitialState(initialState)
  .case(
    init,
    (state, payload): ITestState => {
      return initialState;
    }
  )
  .case(setText, (state, payload) => {
    return { ...state, text: payload };
  })
  // 非同期のアクション
  .case(asyncGetData.async.started, (state, { url }) => {
    console.log('started');
    return { ...state, apiEndpoint: url };
  })
  .case(asyncGetData.async.done, (state, { params, result }) => {
    console.log('done');
    return { ...state, apiResult: result.date };
  })
  .case(asyncGetData.async.failed, (state, result) => {
    console.log('failed');
    return { ...state, apiResult: result.error.message };
  });
