import { Note } from "../../x-note/x-note.js";
import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";

class BoardView extends HTMLElement {
  constructor() {
    super();
    this.localstorageHandler = new LocalStorageHandler();

    this.boardDiv = document.createElement("div");
    this.boardDiv.classList.add("papper");
    this.boardDiv.draggable = true;
    this.appendChild(this.boardDiv);

    const style = document.createElement("style");
    style.innerHTML = `@import 'web-components/board/style/style.css'`;
    this.appendChild(style);

    this.notes = [];
    this.addedNoteIds = new Set(); // Conjunto para rastrear IDs de notas agregadas
  }

  setNotes(notes) {
    this.boardDiv.innerHTML = "";
    this.addedNoteIds.clear();

    notes.forEach((element) => {
      this.notes.push(element);
      if (!element.Archived) {
        let note = new Note(
          element.id,
          element.title,
          element.category,
          element.body
        );

        this.boardDiv.appendChild(note);
      }
    });
  }

  setArchivedNotes(notes) {
    this.boardDiv.innerHTML = "";

    notes.forEach((element) => {
      if (element.Archived && !this.addedNoteIds.has(element.id)) {
        let note = new Note(
          element.id,
          element.title,
          element.category,
          element.body
        );

        this.boardDiv.appendChild(note);
        this.addedNoteIds.add(element.id);
      }
    });
  }

  createNote() {
    this.card = document.createElement("div");
    this.card.className = "card";

    const titleInput = document.createElement("input");
    titleInput.className = "input-field";
    titleInput.placeholder = "Title";

    const bodyInput = document.createElement("input");
    bodyInput.className = "input-field";
    bodyInput.placeholder = "Body";

    this.arrow = document.createElement("div");
    this.arrow.className = "card__arrow";

    // Agregar un botón de guardar
    const saveBtn = document.createElement("button");
    saveBtn.className = "info__close";
    saveBtn.textContent = "Save";
    saveBtn.title = "Save Note";

    this.card.appendChild(titleInput);
    this.card.appendChild(bodyInput);
    this.arrow.appendChild(saveBtn);
    this.card.appendChild(this.arrow);
    this.boardDiv.appendChild(this.card);

    const userId = this.localstorageHandler.getOfLocalStorage("userId");

    saveBtn.addEventListener("click", () => {
      const noteData = {
        userId: parseInt(userId, 10),
        title: titleInput.value,
        body: bodyInput.value,
      };
      this.dispatchEvent(
        new CustomEvent("save-note", {
          detail: noteData,
        })
      );
    });

    this.arrow.appendChild(saveBtn);
  }
}

customElements.define("board-view", BoardView);
export { BoardView };
