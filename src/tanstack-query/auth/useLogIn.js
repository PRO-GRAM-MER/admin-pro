import { useMutation } from "@tanstack/react-query";
import { logInRequest } from "../../utils/https-request/auth/logInRequest";

const useLogInMutation = () => {
  const { mutateAsync, isError, isLoading, isPending, isSuccess } = useMutation(
    // Define your mutation function
    {
      mutationFn: (data) => logInRequest(data),
    }
  );

  return {
    mutateAsync,
    isError,
    isLoading,
    isPending,
    isSuccess,
  };
};

export default useLogInMutation;
