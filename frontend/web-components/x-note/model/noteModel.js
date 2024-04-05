import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";
import { configApiFileSystem } from "../../../config.js";

class NoteModel {
  constructor() {
    this.localStorageH = new LocalStorageHandler();
  }

  async editNoteById(data) {
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");

      let response = await axios.patch(
        `${configApiFileSystem.url}note/edit`,
        data,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteNoteById(id) {
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");

      let response = await axios.delete(
        `${configApiFileSystem.url}note/delete`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          data: {
            id: id,
          },
        }
      );

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async archiveNote(id) {
    console.log(id);
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");

      let response = await axios.patch(
        `${configApiFileSystem.url}note/archive`,
        {
          id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { NoteModel };
