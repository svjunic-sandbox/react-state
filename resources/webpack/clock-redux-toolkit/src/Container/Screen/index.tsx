import { Action } from 'typescript-fsa';

//import {} from '~/State/Screen/action.ts';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Screen from '~/Components/Screen.tsx';

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.ScreenSettingReducer,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {};
};

export default connect(mapStateToProps)(Screen);
