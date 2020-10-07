import { Action } from 'typescript-fsa';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Screen from '~/components/screen.tsx';

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.ScreenSettingReducer,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {};
};

export default connect(mapStateToProps)(Screen);
