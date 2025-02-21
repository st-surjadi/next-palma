import { AuthUseCase } from "@src/usecases/auth";
import { AuthRepository } from "@src/repository/auth";

export const createServiceInstances = () => {
  const authRepository = new AuthRepository();
  const authUseCase = new AuthUseCase(authRepository);

  return {
    authUseCase,
  };
};

export type ServiceInstances = ReturnType<typeof createServiceInstances>;
