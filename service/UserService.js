import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/UserModel.js";
import mailService from "./MailService.js";
import UserDto from "../dtos/UserDto.js";
import tokenService from "./TokenService.js";

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error("Пользователь с почтовым адресом уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();

    const newUser = new UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationLink(email, activationLink);

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

// export { UserService };
export default new UserService();
