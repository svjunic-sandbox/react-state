import React, { useEffect, useState } from 'react';
import { selector, useRecoilValue } from 'recoil';
import { lastupdateSelector } from '~/store/lastupdate';

const pStyle = {
  fontSize: '1.6rem',
  marginBottom: '1.4rem',
};

const Lastupdate: React.FC = () => {
  // hoge
  const subscribeStates = useRecoilValue(lastupdateSelector);

  const [date, setDate] = useState(Date());

  useEffect(() => {
    console.log(subscribeStates);
    setDate(Date());
  }, [subscribeStates]);

  return (
    <>
      <p style={pStyle}>LastUpdate: {date}</p>
    </>
  );
};

export default Lastupdate;
