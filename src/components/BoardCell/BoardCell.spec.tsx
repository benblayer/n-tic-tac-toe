import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BoardCell, { BoardCellProps } from './BoardCell';
import { BoardCellValue } from '../../consts/board.consts';

window.alert = jest.fn();

const dummyProps: BoardCellProps = {
  value: BoardCellValue.EMPTY,
  row: 0,
  col: 0,
  cellClicked: () => {},
};

describe('App', () => {
  it("shouldn't let click the cell once it is set", () => {
    const { value, row, col, cellClicked } = dummyProps;
    const { container } = render(
      <BoardCell value={value} row={row} col={col} cellClicked={cellClicked} />,
    );
    const result = container.querySelector('.board-cell');
    const inner = result?.innerHTML;
    result && fireEvent.click(result, { button: 1 });
  });
});
