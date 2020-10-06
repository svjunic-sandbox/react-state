import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

import { setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds } from '~/State/ScreenSetting/action.ts';
import { IScreenSettingHandler } from '~/Container/ScreenSetting/index.tsx';
import { FONT_NAME_LIST, getEnabledFontSize } from '~/font.ts';
import { useSessionStorage } from 'beautiful-react-hooks';

import RadioControl from '~/Components/RadioControl/index.tsx';
import SelectControl from '~/Components/SelectControl/index.tsx';

const ScreenSetting: React.FC<IScreenSettingState & IScreenSettingHandler> = ({ fontSize, fontFamily, fontWeight, fontColor, backgroundColor, enabledShowMilliseconds, setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds }) => {
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
      setFontFamily(fontFamilyOptionList[0].value);
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
      setFontWeight(enabledFontWeightList[0]);
    }
  }, [fontFamily]);

  useEffect(() => {
    const defaultValue = 28;
    setFontSize(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    const fontName = e.target.value;
    setFontFamily(fontName);
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color.rgb);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.rgb);
  };

  const handleEnabledShowMilliseconds = (e) => {
    console.log(e.target.checked);
    setEnabledShowMilliseconds(e.target.checked);
  };

  return (
    <div className="setting">
      <fieldset className="setting-fieldset">
        <legend className="setting-legend">font</legend>
        <dl className="setting-font">
          <SelectControl title="font-family" defaultValue={fontFamilyOptionList[0]} options={fontFamilyOptionList} name="font-family" onChange={handleFontFamilyChange} />
          <SelectControl title="font-size" defaultValue={fontSizeOptionList[0]} options={fontSizeOptionList} name="font-size" onChange={handleFontSizeChange} />
          <SelectControl title="font-weight" defaultValue={fontWeightOptionList[0]} options={fontWeightOptionList} name="font-weight" onChange={handleFontWeightChange} />
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
