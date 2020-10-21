declare type AppState = {
  screen: IScreenState;
  screenSetting: IScreenSettingState;
  //TestReducer: ITestState;
  test: ITestState;
};

declare interface ITestState {
  text: string;
  apiEndpoint?: string;
  apiResult?: string;
}

declare interface IColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

declare type IAsyncGetDataParams = { url: string };
declare type IAsyncDataGetResult = { date: string };
declare type IAsyncDataGetError = Error;

declare interface IScreenState {}

declare interface IScreenSettingState {
  fontSize: number;
  fontFamily: string;
  fontWeight: number;
  fontColor: IColor;
  backgroundColor: IColor;
  enabledShowMilliseconds: boolean;
}

declare interface IScreenSettingHandler {
  setFontSize: (num: string | number) => Action<string | number>;
  setFontFamily: (num: string) => Action<string>;
  setFontWeight: (num: string | number) => Action<string | number>;
  setFontColor: (color: IColor) => Action<IColor>;
  setBackgroundColor: (color: IColor) => Action<IColor>;
  setEnabledShowMilliseconds: (isEnabled: boolean) => Action<boolean>;
}

declare interface ITestHandler {
  setText: (text: string) => Action<string>;
  //asyncGetData: (url: string) => Action<{ string }>;
  asyncGetData: () => Action<{ string }>;
}

declare interface IScreenHandler {}

declare interface ScreenPanelProps {
  type: string;
  num: number;
}

declare interface RadioControlProps {
  controlType: 'checkbox' | 'radio';
  label?: string | undefined;
  name: string;
  value: string;
  defaultChecked?: boolean | undefined;
  onChange: (e: ChangeEvent) => void;
}

declare interface rgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

declare interface IOption {
  value: string;
  valueName: string;
}

declare interface SelectControlProps {
  title: string;
  name: string;
  defaultValue: IOption;
  options: IOption[];
  onChange: (e: ChangeEvent) => void;
}
