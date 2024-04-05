class NoteController {
  constructor(innerView, innerModel) {
    this.view = innerView;
    this.model = innerModel;

    this.view.addEventListener("delete-note", (e) => {
      this.onDeleteButtomClick(e.detail);
    });

    this.view.addEventListener("edit-note", (e) => {
      this.onEditButtomClick(e.detail);
    });
    this.view.addEventListener("save-note", (e) => {
      console.log(e.detail);
      this.onSaveButtomClick(e.detail);
    });
    this.view.addEventListener("archive-note", (e) => {
      this.onArchiveButtomClick(e.detail);
    });
  }

  enable() {}

  disanble() {}

  async onDeleteButtomClick(id) {
    const res = await this.model.deleteNoteById(id);
    if (res) {
      window.dispatchEvent(new CustomEvent("changed-notes-state"));
    }
  }

  async onEditButtomClick(data) {
    this.view.changeToEditNote();
  }

  async onSaveButtomClick(data) {
    const res = await this.model.editNoteById(data);

    if (res) {
      window.dispatchEvent(new CustomEvent("changed-notes-state"));
    }
  }

  async onArchiveButtomClick(id) {
    const res = await this.model.archiveNote(id);
    if (res) {
      window.dispatchEvent(new CustomEvent("changed-notes-state"));
    }
  }
}
export { NoteController };
