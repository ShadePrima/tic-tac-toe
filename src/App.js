import React from 'react';

import Board from './components/Board';

const Game = () => {
  const [xIsNext, setXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>todo</ol>
      </div>
    </div>
  );
};

export default Game;
