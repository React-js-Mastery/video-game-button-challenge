import React, { useState } from 'react';

const GameButton = () => {

  const [gameRunning, setGameRunning] = useState(false);

  function handleClick() {
    setGameRunning(!gameRunning);
  }

  return (
    <div
      className="video-game-button"
      onClick={handleClick}
    >
      {gameRunning ? 'Pause' : 'Play'}
    </div>
  );
};

export default GameButton;
