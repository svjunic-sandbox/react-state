import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { setText, asyncGetData } from '~/features/test/testReducer.ts';

import Test from '~/components/test.tsx';

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.test,
  };
};

// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
export const mapDispatchToProps = (dispatch: Dispatch<any> | ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
  return {
    setText: (text: string) => {
      dispatch(setText(text));
    },
    asyncGetData: (url: string) => {
      dispatch(asyncGetData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
