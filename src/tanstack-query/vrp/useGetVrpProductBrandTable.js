import { useQuery } from "@tanstack/react-query";
import { vrpProductBrandTableRequest } from "../../utils/https-request/vrp/vrpProductBrandTableRequest";




function useGetVrpProductBrandTable({ requestId }) { // Destructure as an object
  const {
    data,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["vrpProductDetail", "vrpProductBrandTable", requestId],
    queryFn: () => vrpProductBrandTableRequest({ requestId }), // Wrapped in a function
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess };
}

export default useGetVrpProductBrandTable;
