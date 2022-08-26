import React, { useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<IBoardProps> = ({ board, setBoard }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

 
  function click(cell: Cell) {
    if(selectedCell !== cell && selectedCell?.figure?.canMoveOn(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell])
  
  
  function highLightCells() {
    if(selectedCell)  {
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
    <div className='board'>
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
  );
};

export default BoardComponent;