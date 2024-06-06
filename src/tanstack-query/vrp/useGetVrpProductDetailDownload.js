import { useQuery } from "@tanstack/react-query";
import { vrpProductDetailDownloadRequest } from "./vrpProductDetailDownloadRequest";

function useGetVrpProductDetailDownLoad() {
  // Destructure as an object
  const { data, isError, isPending, isSuccess, refetch } = useQuery({
    queryKey: ["vrpProductDetail"],
    queryFn: ({ requestId }) => vrpProductDetailDownloadRequest({ requestId }), // Wrapped in a function
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: false,
  });
  return { data, isError, isPending, isSuccess, refetch };
}

export default useGetVrpProductDetailDownLoad;
