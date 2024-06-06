import { useQuery } from "@tanstack/react-query";
import { sellerStatusRequest } from "../../utils/https-request/vrp/sellerStatusRequest";


function useGetSellerStatus() {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["sellerStatus"],
    queryFn: sellerStatusRequest,
    refetchOnWindowFocus: false,
    retry: 2, // Maximum number of retries
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess, refetch };
}

export default useGetSellerStatus;
