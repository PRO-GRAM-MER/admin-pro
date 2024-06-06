import { useQuery } from "@tanstack/react-query";
import { vrpSortingListRequest } from "../../utils/https-request/vrp/vrpSortingListRequest"; 

function useGetVrpSortingOptions() {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch
  } = useQuery({
    queryKey: ["vrpSortingList"],
    queryFn: vrpSortingListRequest,
    refetchOnWindowFocus: false,
    retry: 2, // Maximum number of retries
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess,refetch  };
}

export default useGetVrpSortingOptions;
