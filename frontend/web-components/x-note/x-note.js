import { NoteView } from "./view/noteView.js";
import { NoteModel } from "./model/noteModel.js";
import { NoteController } from "./controller/noteCotroller.js";

class Note extends HTMLElement {
  constructor(id, title, category, body) {
    super();
    this.view = new NoteView(id, title, category, body);
    this.model = new NoteModel();
    this.controller = new NoteController(this.view, this.model);
    this.appendChild(this.view);
  }
}

customElements.define("x-note", Note);
export { Note };
