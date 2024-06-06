import { useQuery } from "@tanstack/react-query";
import { vrpSortedListRequest } from "../../utils/https-request/vrp/vrpSortedListRequest";

function useGetVrpSortedList(filters) {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["vrpFilteredData", filters],
    queryFn: ()=>vrpSortedListRequest(filters),
    refetchOnWindowFocus: false,
    retry: 2, // Maximum number of retries
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess, refetch };
}

export default useGetVrpSortedList;
