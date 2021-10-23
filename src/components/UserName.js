import { useState } from 'react';

export default function UserName(props) {
  const [inputName, setInputName] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    props.inputHandler(inputName);
  }
  function onChangeHandler(event) {
    setInputName(event.target.value);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={onChangeHandler} value={inputName} type='text'></input>
        <button>enter</button>
      </form>
    </>
  );
}
