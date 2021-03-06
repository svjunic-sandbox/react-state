import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setText, asyncGetData } from '~/State/Test/action.ts';
import { AppState } from '~/store';

//export interface TestProps {
//  text: string;
//}

const Test: React.FC = () => {
  const dispatch = useDispatch();

  const text = useSelector((state: AppState) => state.TestReducer.text, shallowEqual);
  const apiResult = useSelector((state: AppState) => state.TestReducer.apiResult, shallowEqual);

  const [localText, setLocalText] = useState(text);

  useEffect(() => {
    // 非同期確認用
    dispatch(asyncGetData({ url: '/react-state/' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setText(localText));
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
