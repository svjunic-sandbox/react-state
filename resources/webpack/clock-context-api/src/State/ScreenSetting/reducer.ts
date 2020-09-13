export const screenSettingReducer = (state, action): IScreenSettingState => {
  switch (action.type) {
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.value };
      break;
    case 'SET_FONT_COLOR':
      return { ...state, fontColor: action.value };
      break;
    case 'SET_FONT_FAMILY':
      return { ...state, fontFamily: action.value };
      break;
    case 'SET_FONT_WEIGHT':
      return { ...state, fontWeight: action.value };
      break;
    case 'SET_BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.value };
      break;
    case 'SET_ENABLED_SHOW_MILLISECONDS':
      return { ...state, enabledShowMilliseconds: action.value };
      break;
  }
  return state;
};
