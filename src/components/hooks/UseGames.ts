import { useEffect, useState } from "react";
import ApiClient from "../../serivices/ApiClient";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FectchResponse {
  count: number;
  results: Game[];
}

export default function () {
  const [games, setGames] = useState<Game[]>([]);
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
