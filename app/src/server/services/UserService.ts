import { inject, injectable } from "tsyringe";

@injectable()
export class UserService {
  async getUserById() {
    return "id";
  }
}
