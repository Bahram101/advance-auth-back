import userService from "../service/UserService.js";

class UserController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      userService.registration(email, password);
    } catch (e) {
      res.json(e);
    }
  }

  async login(req, res) {
    try {
    } catch (e) {}
  }

  async logout(req, res) {
    try {
    } catch (e) {}
  }

  async activate(req, res) {
    try {
    } catch (e) {}
  }

  async refresh(req, res) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["asdf", "wer"]);
    } catch (e) {}
  }
}

// export default UserController;
/***************************************************** */
export default new UserController();
/***************************************************** */
// const userController = new UserController();
// export {userController}
/***************************************************** */
// const userController = new UserController();
// export const { register, getUsers } = userController;
