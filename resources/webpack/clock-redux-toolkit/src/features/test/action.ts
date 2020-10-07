// TODO: 基本できてからためそう
// https://qiita.com/m0a/items/703d64c74e43cb392a64
import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import axios from 'axios';
import { Dispatch } from 'redux';

const actionCreator = actionCreatorFactory();

export const init = actionCreator('INIT');
export const setText = actionCreator<string>('SET_TEXT');

//// 普通の書き方
//export type Action =
//  | {
//      type: 'INIT';
//      payload: undefined;
//    }
//  | {
//      type: 'SET_TEXT';
//      payload: string;
//    };

const createAsync = asyncFactory<AppState>(actionCreator);

function getServerDate(url: string) {
  return axios.head(url);
}

export const asyncGetData = createAsync<IAsyncGetDataParams, IAsyncDataGetResult, IAsyncDataGetError>(
  //hoge
  'ASYNC_GETDATA',
  async ({ url }, dispatch: Dispatch) => {
    const asyncResp = await getServerDate(url);

    // 遅延の動作を確認するために無理やり遅延
    await new Promise(function (resolve) {
      setTimeout(() => {
        resolve();
      }, 5000);
    });

    return {
      date: asyncResp.headers.date,
    };
  }
);

//// NOTE: 非同期のactionCreator
// 1つめがAPIの引数とかで使うやつ
// param: { url: string },
// done : { date: string }
// fail : { error: string }
// type params = { url: string };
// type result = { date: string };
// type error = { text: string };
// export const asyncGetData = actionCreator.async<params, result, error>('SOMETHING_ASYNC');
