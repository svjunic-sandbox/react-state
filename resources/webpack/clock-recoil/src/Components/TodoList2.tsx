import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import todoListState from '~/store/todolist2';
import Input1 from './Input2';

const style = {
  padding: '20px',
  backgroundColor: '#ffc',
};

const TodoList: React.FC = () => {
  // useStateみたいにsetも使うなら
  //const [todoList, setTodoList] = useRecoilState(todoListState);

  // valueだけでよいならこっち
  const todoList = useRecoilValue(todoListState);

  return (
    <div style={style}>
      todolist2
      <Input1 />
      <ul>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
