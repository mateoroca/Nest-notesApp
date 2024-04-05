import { configApiFileSystem } from "../../../config.js";
import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";

class BoardModel {
  constructor() {
    this.localStorageH = new LocalStorageHandler();
  }

  async getNotes() {
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");
      const userId = this.localStorageH.getOfLocalStorage("userId");

      const data = { id: parseInt(userId, 10) };
      let response = await axios.post(
        `${configApiFileSystem.url}note/getall`,
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

  async getArchivedNotes() {
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");
      const userId = this.localStorageH.getOfLocalStorage("userId");

      const data = { id: parseInt(userId, 10) };
      let response = await axios.post(
        `${configApiFileSystem.url}note/getarchivednotes`,
        data,
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

  async createNote(data) {
    try {
      const authToken = this.localStorageH.getOfLocalStorage("access_token");

      let response = await axios.post(
        `${configApiFileSystem.url}note/create`,
        data,
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
export { BoardModel };
