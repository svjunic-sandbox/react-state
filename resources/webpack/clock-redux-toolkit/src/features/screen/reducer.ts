// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64

import { reducerWithInitialState } from 'typescript-fsa-reducers';

//ここにstateの初期値を書く
export const initialState: IScreenState = {};

export const ScreenReducer = reducerWithInitialState(initialState);
//.case(
//  init,
//  (state, payload): IScreenState => {
//    return initialState;
//  }
//);
