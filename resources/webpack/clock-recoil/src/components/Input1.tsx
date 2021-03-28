import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '~/store/todolist1';

const inputStyle = {
  padding: '10px',
  border: '1px solid #bbb',
  borderRadius: '10px',
  backgroundColor: '#fff',
};

const buttonStyle = {
  margin: '0 0 0 10px',
  padding: '10px',
  border: '1px solid #bbb',
  borderRadius: '10px',
  backgroundColor: '#ccc',
};

const Input: React.FC<IInputProps> = (props) => {
  //// setのみを使いたいのでsetだけとってくる useSetRecoilState
  //const setTodoList = useSetRecoilState(todoListState);

  // 今回は配列にsetするときにvalueも必要だったので普通に useRecoilState
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const [inputValue, setInputValue] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (inputValue === '') return;

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
      <input type="text" value={inputValue} onInput={handleInput} style={inputStyle} placeholder="未入力" />
      <button type="button" onClick={handleClick} style={buttonStyle}>
        add
      </button>
    </div>
  );
};

export default Input;
