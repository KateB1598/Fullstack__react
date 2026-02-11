import { useEffect, useState } from "react";

const useFetch = (url) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url, {
          signal: signal,
        });
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPosts();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
};
export default useFetch;
