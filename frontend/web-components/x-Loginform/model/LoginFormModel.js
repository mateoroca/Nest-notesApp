import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";
import { ApiClient } from "../../common/ApiClient.js";
import { configApiFileSystem } from "../../../config.js";

class LoginFormModel {
  constructor() {
    this.localStorageH = new LocalStorageHandler();
    this.apiClient = new ApiClient(configApiFileSystem.url);
  }
  async login(data) {
    try {
      let response = await axios.post(
        `${configApiFileSystem.url}auth/login`,
        data
      );
      this.localStorageH.setOnlocalStorage(
        "access_token",
        response.data.token.access_token
      );
      this.localStorageH.setOnlocalStorage("userId", response.data.userid);

      return response;
    } catch (error) {
      return { status: 400 };
    }
  }
}

export { LoginFormModel };
