import React, { Dispatch, useState, useEffect, useContext } from 'react';
import { useDispatch, useGlobal } from 'reactn';

const Test: React.FC = () => {
  const [text, setText] = useGlobal('text');
  const [apiResult] = useGlobal('apiResult');
  const [isLoading] = useGlobal('isLoading');
  const asyncGetDataReducer = useDispatch('asyncGetDataReducer');

  useEffect(() => {
    asyncGetDataReducer();
    //const dispatch = useDispatch();
    //dispatch.asyncGetDataReducer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p></p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      <hr className="hr" />
      {isLoading ? <p>読込中</p> : <p>読込完了</p>}
      <p>サーバタイム：{apiResult}</p>
    </>
  );
};

export default Test;
