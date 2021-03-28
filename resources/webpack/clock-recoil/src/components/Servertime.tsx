import React, { Suspense, useState } from 'react';
import ServerTimeView from './ServerTimeView';

const Servertime: React.FC = () => {
  return (
    <>
      <button>サーバタイム取得</button>
      <Suspense fallback={<div>読込中</div>}>
        <ServerTimeView />
      </Suspense>
    </>
  );
};

export default Servertime;
