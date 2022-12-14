import { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Color';
import { Player } from './models/Player';

function App() {

  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function swapPlayer() {
    currentPlayer === whitePlayer ? setCurrentPlayer(blackPlayer) : setCurrentPlayer(whitePlayer);
  }

  useEffect(() => {
    setCurrentPlayer(whitePlayer);
    restart();
  }, []);

  function restart() {
    const board = new Board();
    board.initCells();
    board.addFigures()
    setBoard(board);
  }

  return (
    <div className="app d-flex flex-column justify-content-center align-items-center vh-100 mx-2">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <div className='row d-flex flex-row justify-content-space-between justify-content-center align-items-center'>
        <LostFigures title='White figures:' figures={board.lostWhiteFigures} />
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <LostFigures title='Black figures:' figures={board.lostBlackFigures} />
      </div>

    </div>
  );
}

export default App;
