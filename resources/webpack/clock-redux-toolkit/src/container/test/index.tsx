import { Action } from 'typescript-fsa';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { setText, asyncGetData } from '~/features/test/testReducer.ts';

import Test from '~/components/test.tsx';

export const mapStateToProps = (appState: AppState) => {
  console.log(appState);
  return {
    ...appState.test,
  };
};

// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
export const mapDispatchToProps = (dispatch: Dispatch<any> | ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
  return {
    setText: (text: string) => {
      console.log(text);
      dispatch(setText(text));
    },
    //asyncGetData: (url: string) => {
    //  dispatch(asyncGetData({ url }));
    //},
    asyncGetData: (url: string) => {
      dispatch(asyncGetData());
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
