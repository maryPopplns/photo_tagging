import { useState } from 'react';
import './userName.css';

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

  const heading_style = {
    position: 'fixed',
    top: '.25em',
    color: 'white',
    fontSize: '5em',
  };

  const input_style = {
    height: '50px',
    width: '15em',
    textAlign: 'center',
    fontSize: '2em',
    borderRadius: '.5em',
  };

  const button_style = {
    height: '50px',
    background: 'none',
    border: 'none',
    cursor: 'grab',
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
        <h2 id='input_heading' style={heading_style}>
          Enter Your Name
        </h2>
        <input
          id='name_input'
          style={input_style}
          onChange={onChangeHandler}
          value={inputName}
          type='text'
        ></input>
        <button type='submit' style={button_style}>
          <i style={enter_icon_style} className='fas fa-sign-in-alt'></i>
        </button>
      </form>
    </>
  );
}
