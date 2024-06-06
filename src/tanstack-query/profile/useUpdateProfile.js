import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileDataRequest } from "../../utils/https-request/profile/updateProfileRequest";



const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isLoading, isPending, isSuccess } = useMutation(
    {
      mutationFn: (profileData) => updateProfileDataRequest(profileData),
      onSuccess: () => {
        queryClient.invalidateQueries(["profile"]);
      },
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

export default useUpdateProfileMutation;
