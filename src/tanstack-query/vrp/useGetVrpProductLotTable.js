import { useQuery } from "@tanstack/react-query";
import { vrpProductLotTableRequest } from "../../utils/https-request/vrp/vrpProductLotTableRequest";



function useGetVrpProductLotTable({ requestId }) { // Destructure as an object
  const {
    data,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["vrpProductDetail", "vrpProductLotTable", requestId],
    queryFn: () => vrpProductLotTableRequest({ requestId }), // Wrapped in a function
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess };
}

export default useGetVrpProductLotTable;
