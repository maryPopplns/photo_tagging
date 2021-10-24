import { useState } from 'react';

export default function UserName(props) {
  const [inputName, setInputName] = useState('');

  const form_style = {
    height: '100vh',
    width: '100vw',
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  function submitHandler(event) {
    event.preventDefault();
    props.inputHandler(inputName);
  }
  function onChangeHandler(event) {
    setInputName(event.target.value);
  }

  return (
    <>
      <form style={form_style} onSubmit={submitHandler}>
        <input onChange={onChangeHandler} value={inputName} type='text'></input>
        <button>enter</button>
      </form>
    </>
  );
}
