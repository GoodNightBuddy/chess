import React, { useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void
}

const BoardComponent: React.FC<IBoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


  function click(cell: Cell) {
    if (selectedCell !== cell && selectedCell?.figure?.canMoveOn(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
    } else if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell])


  function highLightCells() {
    if (selectedCell) {
      board.highLightCells(selectedCell);
    } else {
      board.deHighLightCells()
    }
    updateBoard();
  };

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className='col'>
      
        {currentPlayer ? <h3 className="alert alert-primary fs-5 text-center " role="alert">Current Player: {currentPlayer?.color}</h3> : null}
        <div className='board rounded'>
          {board.cells.map((row, index) =>
            <React.Fragment key={index}>
              {row.map(cell =>
                <CellComponent
                  cell={cell}
                  key={cell.id}
                  click={click}
                  selected={cell.x === selectedCell?.x && cell.y === selectedCell.y}
                />)}
            </React.Fragment>
          )}
        </div>
      

    </div>

  );
};

export default BoardComponent;