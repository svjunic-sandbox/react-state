import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import { todoListState } from '~/Store/todolist1';
import Input1 from './Input1';

const style = {
  padding: '20px',
  backgroundColor: '#fef',
};

const TodoList: React.FC = () => {
  // useStateみたいにsetも使うなら
  //const [todoList, setTodoList] = useRecoilState(todoListState);

  // valueだけでよいならこっち
  const todoList = useRecoilValue(todoListState);

  return (
    <div style={style}>
      <Input1 />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />
      ))}
    </div>
  );
};

export default TodoList;
