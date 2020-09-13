import { Action } from 'typescript-fsa';

import { AppState } from '~/store.ts';
//import {} from '~/State/Screen/action.ts';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Screen from '~/Components/Screen.tsx';

//export interface IScreenHandler {
//  bindActionCreators;
//}

export interface IScreenHandler {}

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.ScreenSettingReducer,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {};
};

export default connect(mapStateToProps)(Screen);
