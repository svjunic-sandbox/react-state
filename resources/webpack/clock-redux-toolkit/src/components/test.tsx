import React, { useState, useEffect } from 'react';
import TestProps from '~/container/test/index.tsx';
//import { setText, asyncGetData } from '~/features/test/action.ts';

const Test: React.FC<ITestState & ITestHandler> = ({ text, setText, apiResult, asyncGetData }) => {
  const [localText, setLocalText] = useState(text);

  useEffect(() => {
    // 非同期確認用
    //asyncGetData('/react-state/');
    asyncGetData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setText(localText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localText]);

  return (
    <>
      <input type="text" value={localText} onChange={(e) => setLocalText(e.target.value)} />
      <p>{text}</p>
      <hr className="hr" />
      <p>サーバタイム：{apiResult}</p>
    </>
  );
};

export default Test;
