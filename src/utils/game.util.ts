import { BoardCellValue } from '../consts/board.consts';

export const isWin = (
  board: BoardCellValue[][],
  dim: number,
  row: number,
  col: number
): boolean => {
  return (
    isRowWin(board, dim, row, col) ||
    isColWin(board, dim, row, col) ||
    (row === col ? isTopLeftDiagonalWin(board, dim, row, col) : false) ||
    (row === dim - col - 1
      ? isBottomLeftDiagonalWin(board, dim, row, col)
      : false)
  );
};

const isTopLeftDiagonalWin = (
  board: BoardCellValue[][],
  dim: number,
  row: number,
  col: number
): boolean => {
  let res = true;
  for (let i = 0; i < dim - 1; i++) {
    res =
      res &&
      board[i][i] !== BoardCellValue.EMPTY &&
      board[i][i] === board[i + 1][i + 1];
  }
  return res;
};

const isBottomLeftDiagonalWin = (
  board: BoardCellValue[][],
  dim: number,
  row: number,
  col: number
): boolean => {
  let res = true;
  for (let i = 0; i < dim - 1; i++) {
    res =
      res &&
      board[i][dim - 1 - i] !== BoardCellValue.EMPTY &&
      board[i][dim - 1 - i] === board[i + 1][dim - 2 - i];
  }
  return res;
};

const isRowWin = (board: BoardCellValue[][], dim: number, row: number, col: number): boolean => {
  let rowFlag: boolean;
  let j: number;
  for (let i = 0; i < dim; i++) {
    rowFlag = true;
    for (j = 0; rowFlag && j < dim - 1; j++) {
      rowFlag =
        board[i][j] !== BoardCellValue.EMPTY && board[i][j] === board[i][j + 1];
    }
    if (j + 1 === dim) {
      return true;
    }
  }
  return false;
};

const isColWin = (board: BoardCellValue[][], dim: number, row: number, col: number): boolean => {
  return false;
};
