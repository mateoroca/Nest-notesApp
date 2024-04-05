class BoardController {
  constructor(viewReference, modelReference) {
    this.view = viewReference;
    this.model = modelReference;

    this.view.addEventListener("save-note", (e) => {
      this.onButtonSaveNote(e.detail);
    });
  }

  enable() {
    this.setNotes();
  }
  disable() {}

  async setNotes() {
    const notes = await this.model.getNotes();
    this.view.setNotes(notes);
  }

  async setArchivedNotes() {
    const notes = await this.model.getNotes();
    this.view.setArchivedNotes(notes);
  }

  createNoteInstance() {
    this.view.createNote();
  }

  async onButtonSaveNote(data) {
    const res = await this.model.createNote(data);
    if (res) {
      window.dispatchEvent(new CustomEvent("changed-notes-state"));
    }
  }
}

export { BoardController };
