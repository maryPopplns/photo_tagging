import { useState } from 'react';
import Home from '../home/Home';
import HighScores from '../high_scores/HighScores';
import Game from '../game/Game';

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
  if (showScores) {
    return <HighScores showScoresToggle={showScoresToggle} />;
  }
  if (showGame) {
    return <Game showGameToggle={showGameToggle} />;
  }
}
