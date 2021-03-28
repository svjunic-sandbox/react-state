import React from 'react';

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  return (
    <li>
      {props.id}:{props.text}
    </li>
  );
};

export default TodoItem;
