import { Action } from 'typescript-fsa';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '~/store.ts';
import { setText, asyncGetData } from '~/State/Test/action.ts';

import Test from '~/Components/Test.tsx';

export interface ITestHandler {
  setText: (text: string) => Action<string>;
  asyncGetData: (url: string) => Action<{ string }>;
}

export const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.TestReducer,
  };
};

// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
export const mapDispatchToProps = (dispatch: Dispatch<any> | ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
  return {
    setText: (text: string) => dispatch(setText(text)),
    asyncGetData: (url: string) => {
      dispatch(asyncGetData({ url }));
    },
  };
  //return {
  //  increment: () => dispatch(increment()),
  //  decrement: () => dispatch(decrement()),
  //  reset: () => dispatch(reset()),
  //}
  ////import { bindActionCreators } from 'redux' ;
  //// このbindActionCreators を使うとdispatchをちんたら書く必要がなくなるらしい（ためしてない）
  //return bindActionCreators({ setText }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
