import { User } from "@src/types/User";

export interface AuthPort {
  getUserByUsername(username: string): Promise<User | null>;
}
