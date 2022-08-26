import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-knight.png'
import blackLogo from '../../assets/black-knight.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMoveOn(target: Cell): boolean {
    if(!super.canMoveOn(target)) {
      return false;
    }

    return true
  }
}