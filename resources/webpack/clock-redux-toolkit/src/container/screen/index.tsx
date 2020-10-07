import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Screen from '~/components/screen.tsx';

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.screenSetting,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<any> | ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
  return {};
};

export default connect(mapStateToProps)(Screen);
