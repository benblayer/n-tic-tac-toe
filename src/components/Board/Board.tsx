import React, { FC, useState } from 'react';
import {
  boardCellPrefix,
  BoardCellValue,
  boardRowPrefix,
} from '../../consts/board.consts';
import BoardCell from '../BoardCell/BoardCell';
import s from '../App/App.scss';

export type BoardProps = {
  n: number;
  checkStatus: (board: BoardCellValue[][]) => void;
};

const Board: FC<BoardProps> = ({ n, checkStatus }: BoardProps) => {
  const newBoard = Array.from(Array(n), () =>
    new Array(n).fill(BoardCellValue.EMPTY),
  );
  const [cells, setCells] = useState(newBoard);
  const [turn, setTurn] = useState(BoardCellValue.X);

  const onCellClicked = (row: number, col: number) => {
    const nextCells = cells.map((r) => r.slice());
    for (let i = 0; i < n; i++) {
      if (i === row) {
        for (let j = 0; j < n; j++) {
          if (j === col) {
            nextCells[i][j] = turn;
          }
        }
      }
    }
    setCells(nextCells);
    checkStatus(cells);
    setTurn(turn === BoardCellValue.X ? BoardCellValue.O : BoardCellValue.X);
  };

  return (
    <div className={s.boardContainer}>
      <table className={s.board}>
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
      </table>
    </div>
  );
};

export default Board;
