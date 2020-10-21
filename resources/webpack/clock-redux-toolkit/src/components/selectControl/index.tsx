import React from 'react';

const SelectControl: React.FC<SelectControlProps> = ({ title, name, defaultValue, options, onChange }) => {
  console.log(title, name, defaultValue, options, onChange);
  const createOptionTag = () => {
    return (
      <>
        <dt className="setting-font_title">{title}</dt>
        <dd className="setting-font_detail">
          <div className="setting-font-family">
            <select defaultValue={defaultValue.value} name={name} onChange={onChange}>
              {(() => {
                const list = options.map(({ value, valueName }) => {
                  return (
                    <option value={value} key={value}>
                      {valueName}
                    </option>
                  );
                });
                return list;
              })()}
            </select>
          </div>
        </dd>
      </>
    );
  };

  return <>{options.length > 0 ? createOptionTag() : null}</>;
};

export default React.memo(SelectControl);
