import { BoardCellValue } from '../consts/board.consts';

export const isWin = (
  board: BoardCellValue[][],
  dim: number,
  row: number,
  col: number
): boolean => {
  return (
    (row === col ? isTopLeftDiagonalWin(board, dim) : false) ||
    (row === dim - col - 1 ? isBottomLeftDiagonalWin(board, dim) : false) ||
    isRowWin(board, dim, row) ||
    isColWin(board, dim, col)

  );
};

const isTopLeftDiagonalWin = (
  board: BoardCellValue[][],
  dim: number
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
  dim: number
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

const isRowWin = (
  board: BoardCellValue[][],
  dim: number,
  row: number
): boolean => {
  let valid = true;
  let i: number;
  for (i = 0; valid && i < dim - 1; i++) {
    valid =
      board[row][i] !== BoardCellValue.EMPTY &&
      board[row][i] === board[row][i + 1];
  }
  return valid && i + 1 === dim;
};

const isColWin = (
  board: BoardCellValue[][],
  dim: number,
  col: number
): boolean => {
  let valid = true;
  let i: number;
  for (i = 0; valid && i < dim - 1; i++) {
    valid =
      board[i][col] !== BoardCellValue.EMPTY &&
      board[i][col] === board[i + 1][col];
  }
  return valid && i + 1 === dim;
};
