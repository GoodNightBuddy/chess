import React from 'react';
import { Cell } from '../models/Cell';

interface ICellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<ICellProps> = ({ cell, selected, click }) => {

  return (
    <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(cell)}
      style={{background: cell.available && cell.figure ? 'green' : ''}}
    >

      {cell.available && !cell.figure && <div className='avalible'></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
    </div>
  );
};

export default CellComponent;