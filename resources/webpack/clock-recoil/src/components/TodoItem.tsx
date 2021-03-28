import React from 'react';

const liStyle = {
  fontSize: '1.6rem',
};

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  return (
    <li style={liStyle}>
      {props.id}:{props.text}
    </li>
  );
};

export default TodoItem;
