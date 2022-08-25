import { Cell } from "../Cell";
import { Colors } from "../Color";
import logo from '../assets/black-king.png';

export enum FigureNames {
  FIGURE = 'figure',
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop'
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;
  
  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
    cell.figure = this;
  };

  canMoveOn(target: Cell): boolean {
    return true;
  };

  moveFigure(target: Cell) {}
}