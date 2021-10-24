import UserName from './components/UserName';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function inputHandler(input) {
    setName(input);
  }

  return (
    <>
      {name ? (
        <Home inputName={name} />
      ) : (
        <UserName inputHandler={inputHandler} />
      )}
      <div>{name}</div>
    </>
  );
}

export default App;
