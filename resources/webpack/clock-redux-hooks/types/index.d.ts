declare interface ITestState {
  text: string;
  apiEndpoint?: string;
  apiResult?: string;
}

declare interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

declare type IAsyncGetDataParams = { url: string };
declare type IAsyncDataGetResult = { date: string };
declare type IAsyncDataGetError = { text: string };
