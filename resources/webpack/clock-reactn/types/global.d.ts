import 'reactn';

declare module 'reactn/default' {
  export interface Reducers {
    asyncGetDataReducer: (
      // hoge
      global: State
    ) => null;

    setApiResult: (
      // hoge
      global: State,
      text: string
    ) => Pick<State, 'apiResult'>;

    setIsLoading: (
      // hoge
      global: State,
      dispatch: Dispatch,
      isLoading: boolean //引数
    ) => Pick<State, 'isLoading'>;
  }

  export interface State {
    text: string;
    apiResult: string;
    isLoading: boolean;
  }
}

//export interface Reducers {
//  append: (global: State, dispatch: Dispatch, ...strings: any[]) => Pick<State, 'value'>;

//  increment: (global: State, dispatch: Dispatch, i: number) => Pick<State, 'count'>;

//  doNothing: (global: State, dispatch: Dispatch) => null;
//}
