declare interface ITestState {
  text: string;
  apiEndpoint?: string;
  apiResult?: string;
}

declare interface ITodoItem {
  id: string;
  text: string;
}

declare type ITodoItemProps = ITodoItem;
declare type ITodoList = ITodoItem[];

declare interface IInputProps {}
