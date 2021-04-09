import React, { FC, useEffect, useState } from 'react';
import {
  boardCellPrefix,
  BoardCellValue,
  boardRowPrefix,
  IBoardCellPos,
} from '../../consts/board.consts';
import BoardCell from '../BoardCell/BoardCell';
import s from '../App/App.scss';

export type BoardProps = {
  n: number;
  checkStatus: (
    board: BoardCellValue[][],
    turn: BoardCellValue,
    pos: IBoardCellPos
  ) => void;
};

const Board: FC<BoardProps> = ({ n, checkStatus }: BoardProps) => {
  const newBoard = Array.from(Array(n), () =>
    new Array(n).fill(BoardCellValue.EMPTY)
  );
  const [cells, setCells] = useState(newBoard);
  const [turn, setTurn] = useState(BoardCellValue.O); // TODO: Set to X
  const [pos, setPos] = useState({ row: 0, col: 0 });
  useEffect(() => {
    checkStatus(cells, turn, pos);
    setTurn(turn === BoardCellValue.X ? BoardCellValue.O : BoardCellValue.X);
  }, cells);

  const onCellClicked = (row: number, col: number) => {
    const nextCells = cells.map((r) => r.slice());
    nextCells[row][col] = turn;
    setPos({ row, col });
    setCells(nextCells);
  };

  return (
    <div className={s.boardContainer}>
      <table className={s.board}>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={`${boardRowPrefix}${rowIndex}`}>
              {row.map((cellValue, colIndex) => (
                <td key={`${boardCellPrefix}${rowIndex}-${colIndex}`}>
                  <BoardCell
                    key={`${rowIndex}${colIndex}`}
                    value={cellValue}
                    row={rowIndex}
                    col={colIndex}
                    cellClicked={onCellClicked}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
