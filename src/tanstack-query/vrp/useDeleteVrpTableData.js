import { useMutation, useQueryClient } from "@tanstack/react-query";
import { vrpTableDataDeleteRequest } from "../../utils/https-request/vrp/vrpTableDataDeleteRequest";
import axiosInstance from "../../utils/axios-middleware/axiosMiddleware";

const useDeleteVrpTableData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:vrpTableDataDeleteRequest,
    onSuccess:queryClient.invalidateQueries({queryKey:"vrp"})
    });
};

export default useDeleteVrpTableData;
