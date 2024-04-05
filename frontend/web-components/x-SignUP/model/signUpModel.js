import { LocalStorageHandler } from "../../common/LocalStorageHandler.js";
import { ApiClient } from "../../common/ApiClient.js";
import { configApiFileSystem } from "../../../config.js";

class SignUpModel {
  constructor() {
    this.localStorageH = new LocalStorageHandler();
    this.apiClient = new ApiClient(configApiFileSystem.url);
  }
  async signUp(data) {
    try {
      let response = await axios.post(
        `${configApiFileSystem.url}auth/signup`,
        data
      );

      console.log(response);
      this.localStorageH.setOnlocalStorage(
        "access_token",
        response.data.token.access_token
      );
      this.localStorageH.setOnlocalStorage("userId", response.data.userid);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { SignUpModel };
