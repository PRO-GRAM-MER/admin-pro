import { useMutation, useQueryClient } from "@tanstack/react-query";
import { vrpRejectRequest } from "../../utils/https-request/vrp/vrpRejectRequest";

const useRejectVrpData = (requestId, status, remarks) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => vrpRejectRequest(requestId, status, remarks),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: "vrp" }),
  });
};

export default useRejectVrpData;
