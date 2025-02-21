import { AuthPort } from "@src/ports/auth";
import { User } from "@src/types/User";
import { signIn, SignInResponse } from "next-auth/react";

export class AuthUseCase {
  private authRepository: AuthPort;

  constructor(authRepository: AuthPort) {
    this.authRepository = authRepository;
  }

  async login(
    username: string,
    password: string
  ): Promise<SignInResponse | undefined> {
    return await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
  }

  async getUserByUsername(username: string | undefined): Promise<User | null> {
    if (!username) throw new Error("Username is required.");
    return this.authRepository.getUserByUsername(username);
  }
}
