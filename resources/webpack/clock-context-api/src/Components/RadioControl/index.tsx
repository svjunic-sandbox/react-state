import React, { ChangeEvent, useEffect, useState } from 'react';

export interface RadioControlProps {
  controlType: 'checkbox' | 'radio';
  label?: string | undefined;
  name: string;
  value: string;
  defaultChecked?: boolean | undefined;
  onChange: (e: ChangeEvent) => void;
}

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
  }, []);

  return (
    <label>
      <input type={controlType} name={name} value={value} defaultChecked={defaultChecked} onChange={onChange} />
      <span>{localLabel}</span>
    </label>
  );
};

export default RadioControl;
