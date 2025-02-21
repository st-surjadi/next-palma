import { AuthPort } from "@src/ports/auth";
import { User } from "@src/types/User";
import { MOCK_USERS } from "./mock";

export class AuthRepository implements AuthPort {
  async getUserByUsername(username: string): Promise<User | null> {
    return MOCK_USERS.find((user) => user.username === username) || null;
  }
}
