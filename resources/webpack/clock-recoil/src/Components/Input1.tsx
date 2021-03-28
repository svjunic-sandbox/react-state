import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '~/Store/todolist1';

const Input: React.FC<IInputProps> = (props) => {
  //// setのみを使いたいのでsetだけとってくる useSetRecoilState
  //const setTodoList = useSetRecoilState(todoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const [inputValue, setInputValue] = useState('ほげほげ');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
    setTodoList([
      ...todoList,
      {
        id: `item${todoList.length + 1}`,
        text: inputValue,
      },
    ]);
  }

  return (
    <div>
      <input type="text" value={inputValue} onInput={handleInput} />
      <button type="button" onClick={handleClick}>
        add
      </button>
    </div>
  );
};

export default Input;
