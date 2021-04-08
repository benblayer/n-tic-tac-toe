import React, { FC } from 'react';
import { BoardCellValue } from '../../consts/board.consts';
import s from '../App/App.scss';

export type BoardCellProps = {
  value: BoardCellValue;
  row: number;
  col: number;
  cellClicked: (r: number, c: number) => void;
};

const BoardCell: FC<BoardCellProps> = ({
  value,
  row,
  col,
  cellClicked,
}: BoardCellProps) => {
  const onCellClicked = () => {
    if (value !== BoardCellValue.EMPTY) {
      alert('Please choose an empty cell');
    } else {
      cellClicked(row, col);
    }
  };

  return (
    <div className={s.boardCell} onClick={onCellClicked}>
      {value}
    </div>
  );
};

export default BoardCell;
