import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useFavorites = () => {
  const { data, error, mutate, isLoading } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, mutate, isLoading };
};

export default useFavorites;
