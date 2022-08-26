import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-pawn.png'
import blackLogo from '../../assets/black-pawn.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMoveOn(target: Cell): boolean {
    if(!super.canMoveOn(target)) {
      return false;
    }

    return true
  }
}