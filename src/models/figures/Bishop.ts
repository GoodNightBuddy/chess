import { Figure, FigureNames } from "./Figure";
import whiteLogo from '../../assets/white-bishop.png'
import blackLogo from '../../assets/black-bishop.png'
import { Colors } from "../Color";
import { Cell } from "../Cell";


export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}