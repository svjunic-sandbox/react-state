import React, { useCallback, useEffect, useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';

import { FONT_NAME_LIST, getEnabledFontSize } from '~/font.ts';

import SelectControl from '~/components/selectControl/index.tsx';

const ScreenSetting: React.FC<IScreenSettingState & IScreenSettingHandler> = ({ fontFamily, fontWeight, fontColor, backgroundColor, enabledShowMilliseconds, setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds }) => {
  const [minFontSize] = useState(14);
  const [maxFontSize] = useState(100);

  const [fontFamilyOptionList, setFontFamilyOptions] = useState([] as IOption[]);
  const [fontSizeOptionList, setFontSizeOptionList] = useState([] as IOption[]);
  const [fontWeightOptionList, setFontWeightOptionList] = useState([] as IOption[]);

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
  }, [minFontSize, maxFontSize]);

  const fontFamilyOptionsUpdateCallback = useCallback(() => {
    if (fontFamilyOptionList.length) {
      setFontFamily(fontFamilyOptionList[0].value);
    }
  }, [fontFamilyOptionList, setFontFamily]);

  useEffect(() => {
    fontFamilyOptionsUpdateCallback();
  }, [fontFamilyOptionsUpdateCallback]);

  const fontWeightOptionsUpdateCallback = useCallback(() => {
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
  }, [fontFamily, fontWeight, setFontWeight]);

  useEffect(() => {
    fontWeightOptionsUpdateCallback();
  }, [fontWeightOptionsUpdateCallback]);

  useEffect(() => {
    const defaultValue = 28;
    setFontSize(defaultValue);
  }, [setFontSize]);

  const handleFontSizeChangeCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFontSize(e.target.value);
    },
    [setFontSize]
  );

  const handleFontFamilyChangeCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fontName = e.target.value;
      setFontFamily(fontName);
    },
    [setFontFamily]
  );

  const handleFontWeightChangeCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFontWeight(e.target.value);
    },
    [setFontWeight]
  );

  const handleFontColorChange = (color: ColorResult) => {
    setFontColor(color.rgb);
  };

  const handleBackgroundColorChange = (color: ColorResult) => {
    setBackgroundColor(color.rgb);
  };

  const handleEnabledShowMillisecondsCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);
      setEnabledShowMilliseconds(e.target.checked);
    },
    [setEnabledShowMilliseconds]
  );

  return (
    <div className="setting">
      <fieldset className="setting-fieldset">
        <legend className="setting-legend">font</legend>
        <dl className="setting-font">
          <SelectControl title="font-family" defaultValue={fontFamilyOptionList[0]} options={fontFamilyOptionList} name="font-family" onChange={handleFontFamilyChangeCallback} />
          <SelectControl title="font-size" defaultValue={fontSizeOptionList[0]} options={fontSizeOptionList} name="font-size" onChange={handleFontSizeChangeCallback} />
          <SelectControl title="font-weight" defaultValue={fontWeightOptionList[0]} options={fontWeightOptionList} name="font-weight" onChange={handleFontWeightChangeCallback} />
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
            <input type="checkbox" value="milliseconds" checked={enabledShowMilliseconds} onChange={handleEnabledShowMillisecondsCallback} />
            <span>show milliseconds</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default React.memo(ScreenSetting);
