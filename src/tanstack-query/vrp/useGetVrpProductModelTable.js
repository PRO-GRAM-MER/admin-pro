import { useQuery } from "@tanstack/react-query";
import { vrpProductModelTableRequest } from "../../utils/https-request/vrp/vrpProductModelTableRequest";



function useGetVrpProductModelTable({ requestId }) { // Destructure as an object
  const {
    data,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["vrpProductDetail", "vrpProductModelTable", requestId],
    queryFn: () => vrpProductModelTableRequest({ requestId }), // Wrapped in a function
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess };
}

export default useGetVrpProductModelTable;
