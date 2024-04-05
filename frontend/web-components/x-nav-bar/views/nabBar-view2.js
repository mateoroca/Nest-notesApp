import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";

class navBarView2 extends HTMLElement {
  constructor() {
    super();

    this.localStorageHandler = new LocalStorageHandler();

    this.navBar = document.createElement("div");
    this.navBar.classList.add("nav-bar");

    this.leftContainer = document.createElement("div");
    this.leftContainer.classList.add("left-container");

    this.rightContainer = document.createElement("div");
    this.rightContainer.classList.add("right-container");

    this.myNotes = document.createElement("a");
    this.myNotes.classList.add("nav-link");
    this.myNotes.textContent = "My Notes";

    this.createNote = document.createElement("a");
    this.createNote.classList.add("nav-link");
    this.createNote.textContent = "Create Note";

    this.archivedNotes = document.createElement("a");
    this.archivedNotes.classList.add("nav-link");
    this.archivedNotes.textContent = "Archived Notes";

    this.logOutLink = document.createElement("a");
    this.logOutLink.classList.add("nav-link");
    this.logOutLink.textContent = "Log Out";
    this.logOutLink.href = "/logout";

    this.appendChild(this.navBar);
    this.navBar.appendChild(this.leftContainer);
    this.navBar.appendChild(this.rightContainer);
    this.leftContainer.appendChild(this.myNotes);
    this.leftContainer.appendChild(this.createNote);
    this.leftContainer.appendChild(this.archivedNotes);
    this.rightContainer.appendChild(this.logOutLink);

    this.myNotes.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("changed-notes-state"));
    });

    this.createNote.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("crete-note-instance"));
    });

    this.archivedNotes.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("archived-notes"));
    });

    this.logOutLink.addEventListener("click", (e) => {
      this.localStorageHandler.cleanLocalStorage();

      window.dispatchEvent(new CustomEvent("trigger-logout-instance"));
    });
  }
}

customElements.define("navbar-view2", navBarView2);
export { navBarView2 };
