import UserName from './components/username/UserName';
import Home from './components/home/Home';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function inputHandler(input) {
    setName(input);
  }

  return (
    <>
      {name ? <Home name={name} /> : <UserName inputHandler={inputHandler} />}
    </>
  );
}

export default App;
