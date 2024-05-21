import { useEffect, useState } from "react";
import ApiClient from "../../serivices/ApiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    ApiClient.get<FetchResponse<T>>(endPoint, {
      signal: controler.signal,
    })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controler.abort();
  }, []);
  return { data, error, isLoading };
};
export default useData;
