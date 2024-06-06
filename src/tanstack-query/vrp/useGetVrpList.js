import { useQuery } from "@tanstack/react-query";
import { vrpListRequest } from "../../utils/https-request/vrp/vrpListRequest"; 

function useGetVrpList() {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["vrpList"],
    queryFn: vrpListRequest,
    refetchOnWindowFocus: false,
    retry: 2, // Maximum number of retries
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess, refetch };
}

export default useGetVrpList;
