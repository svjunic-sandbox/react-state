import React, { useState, useEffect, useContext } from 'react';
import ScreenPanel from '~/Components/ScreenPanel.tsx';
import { ScreenContext } from '~/App.tsx';
import { useRequestAnimationFrame } from 'beautiful-react-hooks';

import { ZeroPadidng, ColorToRGBA } from '~/Beans/';

const Screen: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const options = {
    increment: 0.5,
    startAt: 0,
    finishAt: -1,
  };

  const onFinish = useRequestAnimationFrame((progress, next) => {
    setDate(new Date());
    next();
  }, options);

  onFinish(() => {
    console.log('finish');
  });

  const [styleObject, setStyleObject] = useState({});

  const screenContext = useContext(ScreenContext);

  const fontSize = screenContext.screenSettingState.fontSize;
  const fontFamily = screenContext.screenSettingState.fontFamily;
  const fontWeight = screenContext.screenSettingState.fontWeight;
  const fontColor = screenContext.screenSettingState.fontColor;
  const backgroundColor = screenContext.screenSettingState.backgroundColor;
  const enabledShowMilliseconds = screenContext.screenSettingState.enabledShowMilliseconds;

  const [hh1, setHh1] = useState(0);
  const [hh2, setHh2] = useState(0);
  const [mm1, setMm1] = useState(0);
  const [mm2, setMm2] = useState(0);
  const [ss1, setSs1] = useState(0);
  const [ss2, setSs2] = useState(0);
  const [sss1, setSss1] = useState(0);
  const [sss2, setSss2] = useState(0);
  const [sss3, setSss3] = useState(0);

  useEffect(() => {
    setStyleObject({
      ...styleObject,
      fontSize: `${fontSize}px`,
      fontFamily,
      fontWeight,
      color: ColorToRGBA(fontColor),
      backgroundColor: ColorToRGBA(backgroundColor),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontSize, fontFamily, fontWeight, fontColor, backgroundColor]);

  useEffect(() => {
    const hh = ZeroPadidng({ num: date.getHours(), minimamDisit: 2 });
    const mm = ZeroPadidng({ num: date.getMinutes(), minimamDisit: 2 });
    const ss = ZeroPadidng({ num: date.getSeconds(), minimamDisit: 2 });
    const sss = ZeroPadidng({ num: date.getMilliseconds(), minimamDisit: 3 });

    setHh1(hh[0]);
    setHh2(hh[1]);
    setMm1(mm[0]);
    setMm2(mm[1]);
    setSs1(ss[0]);
    setSs2(ss[1]);
    setSss1(sss[0]);
    setSss2(sss[1]);
    setSss3(sss[2]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className="screen" style={styleObject}>
      <div className="screen-panel">
        <ScreenPanel type="hh1" num={hh1} />
      </div>
      <div className="screen-panel">
        <ScreenPanel type="hh2" num={hh2} />
      </div>
      <div className="screen-colon">:</div>
      <div className="screen-panel">
        <ScreenPanel type="mm1" num={mm1} />
      </div>
      <div className="screen-panel">
        <ScreenPanel type="mm2" num={mm2} />
      </div>
      <div className="screen-colon">:</div>
      <div className="screen-panel">
        <ScreenPanel type="ss1" num={ss1} />
      </div>
      <div className="screen-panel">
        <ScreenPanel type="ss2" num={ss2} />
      </div>
      {enabledShowMilliseconds ? (
        <>
          <div className="screen-panel">
            <ScreenPanel type="sss1" num={sss1} />
          </div>
          <div className="screen-panel">
            <ScreenPanel type="sss2" num={sss2} />
          </div>
          <div className="screen-panel">
            <ScreenPanel type="sss3" num={sss3} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Screen;
