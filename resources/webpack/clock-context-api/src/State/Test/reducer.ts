export const testReducer = (state, action): ITestState => {
  switch (action.type) {
    case 'TEXT_UPDATE':
      return { ...state, text: action.value };
      break;
    case 'ASYNC_GET_DATA_START':
      return { ...state, isLoading: true };
      break;
    case 'ASYNC_GET_DATA_DONE':
      return { ...state, isLoading: false, apiResult: action.value.result };
      break;
    case 'ASYNC_GET_DATA_FAILD':
      return { ...state, isLoading: false, apiResult: action.value.error };
      break;
  }
  return state;
};
