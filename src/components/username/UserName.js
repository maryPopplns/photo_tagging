import { useState } from 'react';
import './userName.css';

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
      <form id='name_input_form' onSubmit={submitHandler}>
        <h2 id='input_heading'>Enter Your Name</h2>
        <input
          id='name_input'
          onChange={onChangeHandler}
          value={inputName}
          type='text'
        ></input>
        <button id='submit_name_button' type='submit'>
          <i id='submit_name_icon' className='fas fa-sign-in-alt'></i>
        </button>
      </form>
    </>
  );
}
