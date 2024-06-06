import { useQuery } from "@tanstack/react-query";
import { sparesRequest } from "../../utils/https-request/spares/sparesRequest";



function useGetSpares(filters) {
  const { data, isError, isLoading, isSuccess,refetch } = useQuery({
    queryKey: ["spares", filters],
    queryFn: () => sparesRequest(filters),
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess, refetch };
}

export default useGetSpares;
