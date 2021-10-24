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

  const input_style = {
    height: '50px',
    width: '30em',
  };

  const button_style = {
    height: '50px',
    background: 'none',
    border: 'none',
  };

  const enter_icon_style = {
    color: 'white',
    fontSize: '3em',
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
        <input
          style={input_style}
          onChange={onChangeHandler}
          value={inputName}
          type='text'
        ></input>
        <button type='submit' style={button_style}>
          <i style={enter_icon_style} class='fas fa-sign-in-alt'></i>
        </button>
      </form>
    </>
  );
}
