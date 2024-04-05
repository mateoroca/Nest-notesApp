import { BoardController } from "./controller/boardController.js";
import { BoardView } from "./view/boardView.js";
import { BoardModel } from "./model/boardModel.js";

class Board extends HTMLElement {
  constructor() {
    super();
    this.view = new BoardView();
    this.model = new BoardModel();
    this.controller = new BoardController(this.view, this.model);
    this.appendChild(this.view);
  }
  connectedCallback() {
    this.controller.enable();
  }

  disconnectedCallback() {
    this.controller.disable();
  }
}

customElements.define("x-board", Board);

export { Board };
