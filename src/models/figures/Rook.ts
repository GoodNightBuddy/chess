import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-rook.png'
import blackLogo from '../../assets/black-rook.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMoveOn(target: Cell): boolean {
    if(!super.canMoveOn(target)) {
      return false;
    }
    
    if(this.cell.isEmptyVertical(target)) {
      return true;
    }

    if(this.cell.isEmptyHorizontal(target)) {
      return true;
    }

    return false
  }
}