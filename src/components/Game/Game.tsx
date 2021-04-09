import React, { FC, Fragment, useState } from 'react';
import {
  BoardCellValue,
  GameMode,
  IBoardCellPos,
} from '../../consts/board.consts';
import Board from '../Board/Board';
import * as util from '../../utils/game.util';

const Game: FC<{}> = () => {
  const [mode, setMode] = useState(GameMode.WAITING);
  const [dim, setDim] = useState(0);
  const [winner, setWinner] = useState(BoardCellValue.EMPTY);

  const handleDimInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setWinner(BoardCellValue.EMPTY);
  };
  const checkStatus = (
    board: BoardCellValue[][],
    turn: BoardCellValue,
    pos: IBoardCellPos
  ) => {
    if (util.isWin(board, dim, pos.row, pos.col)) {
      setWinner(turn);
      setMode(GameMode.WIN);
      setTimeout(() => {
        reset();
      }, 2000);
    }
  };

  switch (mode) {
    case GameMode.PLAYING:
      return (
        <Fragment>
          <Board n={dim} checkStatus={checkStatus} />
          <button onClick={reset}>Reset</button>
        </Fragment>
      );
    case GameMode.WAITING:
      return (
        <div>
          Pick a dimension bigger than 2:
          <input type="text" onChange={handleDimInput} />
        </div>
      );
    case GameMode.WIN:
      return <div>Player {winner} wins!</div>;

    default:
      return <div></div>;
  }
};

export default Game;
