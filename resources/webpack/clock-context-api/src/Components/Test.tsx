import React, { Dispatch, useState, useEffect, useContext } from 'react';
import { getData } from '~/api';
import { TestContext } from '~/App.tsx';

//export interface TestProps {
//  text: string;
//}

const Test: React.FC = () => {
  const testContext = useContext(TestContext);

  const [localText, setLocalText] = useState(testContext.testState.text);

  useEffect(() => {
    if (testContext.testState.isLoading) return;

    // 非同期確認用
    testContext.testDispatch({ type: 'ASYNC_GET_DATA_START' });

    getData({ url: '/react-state/' })
      .then((res) => {
        console.log('--------------------');
        console.log(res);
        testContext.testDispatch({ type: 'ASYNC_GET_DATA_DONE', value: { result: res.headers.date } });
      })
      .catch((error: Error) => {
        testContext.testDispatch({ type: 'ASYNC_GET_DATA_FAILD', value: { error: error.message } });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    testContext.testDispatch({ type: 'TEXT_UPDATE', value: localText });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localText]);

  console.log(testContext.testState);

  return (
    <>
      <input type="text" value={localText} onChange={(e) => setLocalText(e.target.value)} />
      <p>{testContext.testState.text}</p>
      <hr className="hr" />
      <p>サーバタイム：{testContext.testState.apiResult}</p>
    </>
  );
};

export default Test;
