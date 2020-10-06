// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64

import { reducerWithInitialState } from 'typescript-fsa-reducers';

import {
  init,
  setFontSize,
  setFontFamily,
  setFontWeight,
  setFontColor,
  setBackgroundColor,
  setEnabledShowMilliseconds,
} from '~/State/ScreenSetting/action.ts';

//ここにstateの初期値を書く
export const initialState: IScreenSettingState = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontColor: { r: 0, g: 0, b: 0, a: 1 },
  backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
  enabledShowMilliseconds: true,
};

export const ScreenSettingReducer = reducerWithInitialState(initialState)
  .case(
    init,
    (state, payload): IScreenSettingState => {
      return initialState;
    }
  )
  .case(setFontSize, (state, payload) => {
    const fontSize = typeof payload === 'string' ? parseInt(payload, 10) : payload;
    return { ...state, fontSize };
  })
  .case(setFontFamily, (state, payload) => {
    return { ...state, fontFamily: payload };
  })
  .case(setFontWeight, (state, payload) => {
    const fontWeight = typeof payload === 'string' ? parseInt(payload, 10) : payload;
    return { ...state, fontWeight };
  })
  .case(setFontColor, (state, payload) => {
    return { ...state, fontColor: payload };
  })
  .case(setBackgroundColor, (state, payload) => {
    return { ...state, backgroundColor: payload };
  })
  .case(setEnabledShowMilliseconds, (state, payload) => {
    return { ...state, enabledShowMilliseconds: payload };
  });
