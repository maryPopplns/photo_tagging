import { useState, useEffect } from 'react';
import Main from './Main';
import './game.css';

export default function Game(props) {
  // TODO cerate timer for header
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const TIMER = setInterval(() => {
      setTimeElapsed((prevState) => prevState + 1);
    }, 1000);
    if (isGameOver) {
      clearInterval(TIMER);
      // TODO end timer
    }
    return () => clearInterval(TIMER);
  }, [isGameOver]);

  function gameOver() {
    setIsGameOver(true);
  }

  return (
    <>
      <div id='game_header_container'>
        <header id='game_header'>
          <div id='header_content_container'>
            <button id='game_home_button' onClick={props.showGameToggle}>
              Home
            </button>
            <div id='time_elapsed'>time elapsed: {timeElapsed}</div>
          </div>
        </header>
      </div>
      <Main gameOver={gameOver} />
    </>
  );
}
