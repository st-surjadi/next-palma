import { useSession } from "next-auth/react";
import { useMemo } from "react";

const useAuth = () => {
  const { status } = useSession();

  const isAuthenticated = useMemo(() => {
    return status === "authenticated";
  }, [status]);

  const sessionStatus = useMemo(() => {
    return status;
  }, [status]);

  return {
    sessionStatus,
    isAuthenticated,
  };
};

export default useAuth;
