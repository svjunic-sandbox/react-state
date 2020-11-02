import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { setFontSize, setFontWeight, setFontFamily, setFontColor, setBackgroundColor, setEnabledShowMilliseconds } from '~/features/screenSetting/screenSettingReducer.ts';

import ScreenSetting from '~/components/screenSetting.tsx';

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.screenSetting,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<any> | ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
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
