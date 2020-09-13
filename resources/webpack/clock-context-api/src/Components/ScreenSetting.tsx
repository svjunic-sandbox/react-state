import React, { useEffect, useState, useContext } from 'react';
import { SketchPicker } from 'react-color';

import { FONT_NAME_LIST, getEnabledFontSize } from '~/font.ts';

import RadioControl from '~/Components/RadioControl/index.tsx';
import SelectControl, { IOption } from '~/Components/SelectControl/index.tsx';
import { ScreenSettingContext } from '~/App.tsx';

const ScreenSetting: React.FC = ({}) => {
  const screenSettingContext = useContext(ScreenSettingContext);

  const [minFontSize, setMinFontSize] = useState(28);
  const [maxFontSize, setMaxFontSize] = useState(100);

  const fontSize = screenSettingContext.screenSettingState.fontSize;
  const fontFamily = screenSettingContext.screenSettingState.fontFamily;
  const fontWeight = screenSettingContext.screenSettingState.fontWeight;
  const fontColor = screenSettingContext.screenSettingState.fontColor;
  const backgroundColor = screenSettingContext.screenSettingState.backgroundColor;
  const enabledShowMilliseconds = screenSettingContext.screenSettingState.enabledShowMilliseconds;

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
      screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_FAMILY', value: fontFamilyOptionList[0].value });
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
      screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_FAMILY', value: enabledFontWeightList[0] });
    }
  }, [fontFamily]);

  useEffect(() => {
    const defaultValue = 28;
    screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_SIZE', value: defaultValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFontSizeChange = (e) => {
    screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_SIZE', value: e.target.value });
  };

  const handleFontFamilyChange = (e) => {
    const fontName = e.target.value;
    screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_FAMILY', value: fontName });
  };

  const handleFontWeightChange = (e) => {
    screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_WEIGHT', value: e.target.value });
  };

  const handleFontColorChange = (color) => {
    screenSettingContext.screenSettingDispatch({ type: 'SET_FONT_COLOR', value: color.rgb });
  };

  const handleBackgroundColorChange = (color) => {
    screenSettingContext.screenSettingDispatch({ type: 'SET_BACKGROUND_COLOR', value: color.rgb });
  };

  const handleEnabledShowMilliseconds = (e) => {
    screenSettingContext.screenSettingDispatch({ type: 'SET_ENABLED_SHOW_MILLISECONDS', value: e.target.checked });
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
