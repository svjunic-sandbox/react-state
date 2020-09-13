import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

import {
  setFontSize,
  setFontFamily,
  setFontWeight,
  setFontColor,
  setBackgroundColor,
  setEnabledShowMilliseconds,
} from '~/State/ScreenSetting/action.ts';
import { IScreenSettingState } from '~/State/ScreenSetting/reducer.ts';
import { FONT_NAME_LIST, getEnabledFontSize } from '~/font.ts';

import RadioControl from '~/Components/RadioControl/index.tsx';
import SelectControl, { IOption } from '~/Components/SelectControl/index.tsx';
import { AppState } from '~/store';
import { useDispatch, useSelector } from 'react-redux';

export interface rgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

const ScreenSetting: React.FC = ({}) => {
  // redux-hooks
  const dispatch = useDispatch();
  const fontSize = useSelector((state: AppState) => state.ScreenSettingReducer.fontSize);
  const fontFamily = useSelector((state: AppState) => state.ScreenSettingReducer.fontFamily);
  const fontWeight = useSelector((state: AppState) => state.ScreenSettingReducer.fontWeight);
  const fontColor = useSelector((state: AppState) => state.ScreenSettingReducer.fontColor);
  const backgroundColor = useSelector((state: AppState) => state.ScreenSettingReducer.backgroundColor);
  const enabledShowMilliseconds = useSelector((state: AppState) => state.ScreenSettingReducer.enabledShowMilliseconds);

  const [minFontSize, setMinFontSize] = useState(28);
  const [maxFontSize, setMaxFontSize] = useState(100);

  const [fontFamilyOptionList, setFontFamilyOptions] = useState([] as IOption[]);
  const [fontSizeOptionList, setFontSizeOptionList] = useState([] as IOption[]);
  const [fontWeightOptionList, setFontWeightOptionList] = useState([] as IOption[]);

  const fontWeightOptions = (() => {
    const result: IOption[] = [];
    for (let index = minFontSize; index < maxFontSize; index++) {
      result.push({
        value: index.toString(),
        valueName: index.toString(),
      });
    }
    return result;
  })();

  useEffect(() => {
    setFontFamilyOptions(
      FONT_NAME_LIST.map((fontName) => {
        return {
          value: fontName,
          valueName: fontName,
        };
      })
    );

    setFontSizeOptionList(() => {
      const result: IOption[] = [];
      for (let index = minFontSize; index < maxFontSize; index++) {
        result.push({
          value: index.toString(),
          valueName: index.toString(),
        });
      }
      return result;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fontFamilyOptionList.length) {
      dispatch(setFontFamily(fontFamilyOptionList[0].value));
    }
  }, [fontFamilyOptionList]);

  useEffect(() => {
    console.log(fontFamily);

    setFontWeightOptionList(() => {
      return getEnabledFontSize(fontFamily).map((fontWeight) => {
        return {
          value: fontWeight.toString(),
          valueName: fontWeight.toString(),
        };
      });
    });

    const enabledFontWeightList = getEnabledFontSize(fontFamily);
    if (enabledFontWeightList.indexOf(fontWeight) === -1) {
      dispatch(setFontWeight(enabledFontWeightList[0]));
    }
  }, [fontFamily]);

  useEffect(() => {
    const defaultValue = 28;
    dispatch(setFontSize(defaultValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFontSizeChange = (e) => {
    dispatch(setFontSize(e.target.value));
  };

  const handleFontFamilyChange = (e) => {
    const fontName = e.target.value;
    dispatch(setFontFamily(fontName));
  };

  const handleFontWeightChange = (e) => {
    dispatch(setFontWeight(e.target.value));
  };

  const handleFontColorChange = (color) => {
    dispatch(setFontColor(color.rgb));
  };

  const handleBackgroundColorChange = (color) => {
    dispatch(setBackgroundColor(color.rgb));
  };

  const handleEnabledShowMilliseconds = (e) => {
    console.log(e.target.checked);
    dispatch(setEnabledShowMilliseconds(e.target.checked));
  };

  return (
    <div className="setting">
      <fieldset className="setting-fieldset">
        <legend className="setting-legend">font</legend>
        <dl className="setting-font">
          <SelectControl
            title="font-family"
            defaultValue={fontFamilyOptionList[0]}
            options={fontFamilyOptionList}
            name="font-family"
            onChange={handleFontFamilyChange}
          />
          <SelectControl
            title="font-size"
            defaultValue={fontSizeOptionList[0]}
            options={fontSizeOptionList}
            name="font-size"
            onChange={handleFontSizeChange}
          />
          <SelectControl
            title="font-weight"
            defaultValue={fontWeightOptionList[0]}
            options={fontWeightOptionList}
            name="font-weight"
            onChange={handleFontWeightChange}
          />
        </dl>
      </fieldset>
      <fieldset className="setting-fieldset">
        <legend className="config">Color</legend>
        <div className="font-color">
          <label>
            <span>font-color</span>
            <SketchPicker color={fontColor} onChange={handleFontColorChange} />
          </label>
        </div>
        <div className="background-color">
          <label>
            <span>background-color</span>
            <SketchPicker color={backgroundColor} onChange={handleBackgroundColorChange} />
          </label>
        </div>
      </fieldset>
      <fieldset className="setting-fieldset">
        <legend className="config">field</legend>
        <div className="field">
          <label>
            <input type="checkbox" value="milliseconds" checked={enabledShowMilliseconds} onChange={handleEnabledShowMilliseconds} />
            <span>show milliseconds</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default ScreenSetting;
