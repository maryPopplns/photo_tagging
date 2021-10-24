import { useState } from 'react';
import Home from '../home/Home';

export default function GameController(props) {
  const [showScores, setShowScores] = useState(false);
  const [showGame, setShowGame] = useState(false);
  // const NAME = props.name;

  function showGameToggle() {
    setShowGame((prevState) => !prevState);
  }

  function showScoresToggle() {
    setShowScores((prevState) => !prevState);
  }

  if (showScores === false && showGame === false) {
    return (
      <Home
        showGameToggle={showGameToggle}
        showScoresToggle={showScoresToggle}
      />
    );
  }
}
