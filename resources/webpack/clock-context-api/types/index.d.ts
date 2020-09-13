declare interface IScreenState {}

declare interface IScreenSettingState {
  fontSize: number;
  fontFamily: string;
  fontWeight: number;
  fontColor: IColor;
  backgroundColor: IColor;
  enabledShowMilliseconds: boolean;
}

declare interface ITestState {
  text: string;
  isLoading: boolean;
  apiEndpoint: string;
  apiResult: string;
}

declare interface IAction {
  type: string;
  value?: any;
}

declare interface IScreenStateAction {
  type: string;
  value?: any;
}

declare interface AppState {
  ScreenReducer: IScreenState;
  ScreenSettingReducer: IScreenSettingState;
  TestReducer: ITestState;
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

declare interface IAction {
  type: string;
  value?: any;
}

declare type IScreenAction = IAction;
declare type IScreenSettingAction = IAction;
declare type ITestAction = IAction;

declare interface ITestContext {
  testState: ITestState;
  testDispatch: React.Dispatch<ITestAction>;
}

declare interface IScreenContext {
  screenState: IScreenState;
  screenSettingState: IScreenSettingState;
}

declare interface IScreenSettingContext {
  screenSettingState: IScreenSettingState;
  screenSettingDispatch: React.Dispatch<IScreenSettingAction>;
}

declare interface ITestContext {
  testState: ITestState;
  testDispatch: ITestDispatch;
}
