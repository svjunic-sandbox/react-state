import React from 'react';

const ScreenPanel: React.FC<ScreenPanelProps> = ({ type, num }) => {
  return (
    <>
      <span className={`screen-panel-${type}`}>{num}</span>
    </>
  );
};

//export default React.memo(ScreenPanel);
export default React.memo(ScreenPanel);
