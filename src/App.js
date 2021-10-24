import UserName from './components/username/UserName';
import GameController from './components/game_controller/GameController';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function inputHandler(input) {
    setName(input);
  }

  return (
    <>
      {name ? (
        <GameController name={name} />
      ) : (
        <UserName inputHandler={inputHandler} />
      )}
    </>
  );
}

export default App;
