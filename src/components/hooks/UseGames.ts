import { useEffect, useState } from "react";
import ApiClient from "../../serivices/ApiClient";
import { CanceledError } from "axios";

interface Games {
  id: number;
  name: string;
}

interface FectchResponse {
  count: number;
  results: Games[];
}

export default function () {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    ApiClient.get<FectchResponse>("/games", {
      signal: controler.signal,
    })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controler.abort();
  }, []);
  return { games, error };
}
