import { useQuery } from "@tanstack/react-query";
import { sellerListRequest } from "../../utils/https-request/vrp/sellerListRequest";


function useGetSellerList() {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["sellerList"],
    queryFn: sellerListRequest,
    refetchOnWindowFocus: false,
    retry: 2, // Maximum number of retries
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess, refetch };
}

export default useGetSellerList;
