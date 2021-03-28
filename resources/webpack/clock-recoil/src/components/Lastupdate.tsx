import React, { useEffect, useState } from 'react';
import { selector, useRecoilValue } from 'recoil';
import todoListState1 from '~/store/todolist1';
import todoListState2 from '~/store/todolist2';

const pStyle = {
  fontSize: '1.6rem',
  marginBottom: '1.4rem',
};

const lastupdateSelector = selector({
  key: 'Lastupdate',
  get: ({ get }) => {
    return [get(todoListState1), get(todoListState2)];
  },
});

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
