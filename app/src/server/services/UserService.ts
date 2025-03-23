import bcrypt from "bcrypt";
import { injectable } from "tsyringe";
import db from "../lib/db";
import type { AuthBody } from "../routes/api/auth/types";

const SALT_ROUNDS = 10;
@injectable()
class UserService {
  async register({ username, password }: AuthBody) {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await db.user.create({
      data: {
        username,
        passwordHash: hash,
      },
    });
    return user;
  }
  login() {}
}

export default UserService;
