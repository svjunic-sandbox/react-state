import React, { useEffect, useState } from 'react';

const RadioControl: React.FC<RadioControlProps> = ({ controlType, label, name, value, defaultChecked, onChange }) => {
  const [localLabel, setLocallabel] = useState('');

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof label !== 'string') {
      setLocallabel(value);
    } else {
      setLocallabel(label);
    }

    if (defaultChecked) setChecked(defaultChecked);
    // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
  }, []);

  return (
    <label>
      <input type={controlType} name={name} value={value} defaultChecked={defaultChecked} onChange={onChange} />
      <span>{localLabel}</span>
    </label>
  );
};

export default RadioControl;
