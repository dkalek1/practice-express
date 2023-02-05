const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const body = this.body;
    const { id, password } = await UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "비번틀렸어요" };
    }
    return { success: false, msg: "아이디가 없쇼" };
  }

  async register() {
    try {
      const response = await UserStorage.save(this.body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
