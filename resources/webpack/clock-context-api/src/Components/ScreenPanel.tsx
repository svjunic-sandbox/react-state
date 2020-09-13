import React from 'react';

export interface ScreenPanelProps {
  type: string;
  num: number;
}

const ScreenPanel: React.FC<ScreenPanelProps> = ({ type, num }) => {
  return (
    <>
      <span className={`screen-panel-${type}`}>{num}</span>
    </>
  );
};

export default React.memo(ScreenPanel);
