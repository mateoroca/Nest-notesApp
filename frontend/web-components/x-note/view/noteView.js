class NoteView extends HTMLElement {
  constructor(id, title, category, body) {
    super();
    this.noteId = id;

    this.card = document.createElement("div");
    this.card.className = "card";

    this.category = document.createElement("p");
    this.category.className = "card__type";
    this.category.textContent = `category: ${category}`;

    this.Title = document.createElement("h3");
    this.Title.className = "card__title";
    this.Title.textContent = title;

    this.content = document.createElement("p");
    this.content.className = "card__content";
    this.content.textContent = body;

    this.deleteBtn = document.createElement("button");
    this.deleteBtn.className = "info__close";
    this.deleteBtn.textContent = "🗑";
    this.deleteBtn.title = "Delete Note";

    this.editBtn = document.createElement("button");
    this.editBtn.className = "info__close";
    this.editBtn.textContent = "✎";
    this.editBtn.title = "Edit Note";

    this.archiveBtn = document.createElement("button");
    this.archiveBtn.className = "info__close";
    this.archiveBtn.textContent = "📦";
    this.archiveBtn.title = "Archive Note";

    this.editdiv = document.createElement("div");
    this.editdiv.className = "card__date";

    this.arrow = document.createElement("div");
    this.arrow.className = "card__arrow";

    // Adjuntar elementos al DOM del componente
    this.appendChild(this.card);
    this.card.appendChild(this.Title);
    this.card.appendChild(this.category);
    this.card.appendChild(this.content);
    this.card.appendChild(this.editdiv);
    this.editdiv.appendChild(this.editBtn);
    this.editdiv.appendChild(this.archiveBtn);
    this.arrow.appendChild(this.deleteBtn);
    this.card.appendChild(this.arrow);

    const style = document.createElement("style");
    style.textContent = `@import './web-components/x-note/style/style.css' `;
    this.appendChild(style);

    this.deleteBtn.addEventListener("click", (e) => {
      this.dispatchEvent(
        new CustomEvent("delete-note", { detail: this.noteId })
      );
    });

    this.editBtn.addEventListener("click", (e) => {
      this.changeToEditNote();
    });
    this.archiveBtn.addEventListener("click", (e) => {
      this.dispatchEvent(
        new CustomEvent("archive-note", { detail: this.noteId })
      );
    });
  }

  changeToEditNote() {
    const titleInput = document.createElement("input");
    titleInput.className = "input-field";
    titleInput.placeholder = "Title";

    const bodyInput = document.createElement("textarea");
    bodyInput.className = "input-field";
    bodyInput.placeholder = "Body";

    this.card.replaceChild(titleInput, this.Title);
    this.card.replaceChild(bodyInput, this.content);

    this.card.removeChild(this.editdiv);
    this.arrow.removeChild(this.deleteBtn);

    // Agregar un botón de guardar
    const saveBtn = document.createElement("button");
    saveBtn.className = "info__close";
    saveBtn.textContent = "Save";
    saveBtn.title = "Save Note";

    saveBtn.addEventListener("click", () => {
      const editedData = {
        id: this.noteId,
        title: titleInput.value,
        body: bodyInput.value,
      };
      this.dispatchEvent(
        new CustomEvent("save-note", {
          detail: editedData,
        })
      );
    });

    this.arrow.appendChild(saveBtn);
  }
}

customElements.define("note-view", NoteView);

export { NoteView };
