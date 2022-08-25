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
}