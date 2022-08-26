import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-king.png'
import blackLogo from '../../assets/black-king.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMoveOn(target: Cell): boolean {
    if(!super.canMoveOn(target)) {
      return false;
    }

    if(Math.abs(target.x - this.cell.x) > 1 || Math.abs(target.y - this.cell.y) > 1 ) {
      return false;
    }

    if(this.cell.isEmptyVertical(target)) {
      return true;
    }

    if(this.cell.isEmptyHorizontal(target)) {
      return true;
    }

    if(this.cell.isEmptyDiagonal(target)) {
      return true;
    }

    return false
  }
}