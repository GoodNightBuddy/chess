import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-queen.png'
import blackLogo from '../../assets/black-queen.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }
}