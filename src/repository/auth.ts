import { httpClient } from "../api/http-client";
import { AuthPort } from "../ports/auth";
import { User } from "../types/User";

export class AuthRepository implements AuthPort {
  async getUserByUsername(username: string): Promise<User> {
    const response = await httpClient.get(`/users/${username}`);
    return response.data;
  }
}
