import React, { FC, Fragment, useState } from 'react';
import { GameMode } from '../../consts/board.consts';
import Board from '../Board/Board';

const Game: FC<{}> = () => {
  const [mode, setMode] = useState(GameMode.WAITING);
  const [dim, setDim] = useState(0);

  const handleNInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!Number.isNaN(value) && value > 2) {
      setDim(value);
      setMode(GameMode.PLAYING);
    } else if (e.target.value.length > 0) {
      alert('Please choose a valid dimension');
    }
  };

  const reset = () => {
    setMode(GameMode.WAITING);
  };
  const checkStatus = () => {};

  return mode === GameMode.PLAYING ? (
    <Fragment>
      <Board n={dim} checkStatus={checkStatus} />
      <button onClick={reset}>Reset</button>
    </Fragment>
  ) : (
    <div>
      Pick a dimension bigger than 2:
      <input type="text" onChange={handleNInput} />
    </div>
  );
};

export default Game;
