import React from 'react';

import { useRecoilValue } from 'recoil';
import { servertimeSelector } from '~/store/servertime';

const ServerTimeView: React.FC = () => {
  const date = useRecoilValue(servertimeSelector);

  return <p>サーバータイム{date}</p>;
};

export default ServerTimeView;
