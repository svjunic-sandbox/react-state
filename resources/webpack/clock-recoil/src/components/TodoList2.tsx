import React from 'react';
import { useRecoilState } from 'recoil';
import TodoItem from './TodoItem';
import { todoListState } from '~/store/todolist2';

const style = {
  padding: '20px',
  backgroundColor: '#ffe',
};

const TodoList: React.FC = () => {
  // useRecoilValue() のHooks APIを使って
  // コンポーネントに適用
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div style={style}>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />
      ))}
    </div>
  );
};

export default TodoList;
