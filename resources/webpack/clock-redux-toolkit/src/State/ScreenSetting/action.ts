import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import axios from 'axios';
import { Dispatch } from 'redux';

const actionCreator = actionCreatorFactory('ScreenSetting');

export const init = actionCreator('INIT');
export const setFontSize = actionCreator<string | number>('SET_FONTSIZE');
export const setFontFamily = actionCreator<string>('SET_FONTFAMILY');
export const setFontWeight = actionCreator<string | number>('SET_FONTWEIGHT');
export const setFontColor = actionCreator<IColor>('SET_FONTCOLOR');
export const setBackgroundColor = actionCreator<IColor>('SET_BACKGROUNDCOLOR');
export const setEnabledShowMilliseconds = actionCreator<boolean>('SET_ENABLEDSHOWMILLISECONDS');
