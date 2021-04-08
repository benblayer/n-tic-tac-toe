import React, { FC } from 'react';
import s from './App.scss';
import Game from '../Game/Game';

const App: FC<{}> = () => {
  return (
    <div className={s.root} data-hook="root">
      <Game />
    </div>
  );
};

export default App;
