import { useQuery } from "@tanstack/react-query";
import { vrpProductModelTableExpandedRequest } from "../../utils/https-request/vrp/vrpProductModelTableExpanded";





function useGetVrpProductModelTableExpanded({ requestId }) {
  const {
    data,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["vrpProductDetail", "vrpProductModelTableExpanded", requestId],
    queryFn: () => vrpProductModelTableExpandedRequest({ requestId }), // Wrapped in a function
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });
  return { data, isError, isLoading, isSuccess };
}

export default useGetVrpProductModelTableExpanded;
