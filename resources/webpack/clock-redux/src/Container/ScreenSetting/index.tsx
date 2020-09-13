import { Action } from 'typescript-fsa';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '~/store.ts';
import {
  setFontSize,
  setFontWeight,
  setFontFamily,
  setFontColor,
  setBackgroundColor,
  setEnabledShowMilliseconds,
} from '~/State/ScreenSetting/action.ts';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ScreenSetting from '~/Components/ScreenSetting.tsx';

export interface IScreenSettingHandler {
  setFontSize: (num: string | number) => Action<string | number>;
  setFontFamily: (num: string) => Action<string>;
  setFontWeight: (num: string | number) => Action<string | number>;
  setFontColor: (color: IColor) => Action<IColor>;
  setBackgroundColor: (color: IColor) => Action<IColor>;
  setEnabledShowMilliseconds: (isEnabled: boolean) => Action<boolean>;
}

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.ScreenSettingReducer,
  };
};

//export const mapDispatchToProps = (dispatch: ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {
    setFontSize: (num: string | number) => dispatch(setFontSize(num)),
    setFontFamily: (num: string) => dispatch(setFontFamily(num)),
    setFontWeight: (num: string | number) => dispatch(setFontWeight(num)),
    setFontColor: (color: IColor) => dispatch(setFontColor(color)),
    setBackgroundColor: (color: IColor) => dispatch(setBackgroundColor(color)),
    setEnabledShowMilliseconds: (isEnabled: boolean) => dispatch(setEnabledShowMilliseconds(isEnabled)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSetting);
