import { useMutation } from "@tanstack/react-query";
import { otpRequested } from "../../utils/https-request/auth/otpRequest";

const useRequestOtpMutation = () => {
  const { mutateAsync, isError, isLoading, isPending, isSuccess } = useMutation(
    {
      mutationFn: (mobile_no) => otpRequested(mobile_no),
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

export default useRequestOtpMutation;
