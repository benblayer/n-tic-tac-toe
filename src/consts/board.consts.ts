export enum GameMode {
  WAITING,
  PLAYING,
  WIN,
}

export enum BoardCellValue {
  EMPTY = '',
  O = 'O',
  X = 'X',
}

export interface IBoardCellPos {
  row: number;
  col: number;
}

export const boardRowPrefix = 'board-row-';
export const boardCellPrefix = 'board-cell-';
