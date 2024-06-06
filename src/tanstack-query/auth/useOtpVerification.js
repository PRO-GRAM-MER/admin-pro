
import { useMutation } from "@tanstack/react-query";
import { otpVerificationRequest } from "../../utils/https-request/auth/otpVerificationRequest";



const useOtpVerificationMutation = () => {
  const { mutateAsync, isError, isLoading, isPending, isSuccess } = useMutation({
    mutationFn: (data) => {
      return otpVerificationRequest(data);
    },
  });

  return {
    mutateAsync,
    isError,
    isLoading,
    isPending,
    isSuccess,
  };
};

export default useOtpVerificationMutation;
