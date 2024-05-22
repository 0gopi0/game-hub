import Genres from "../../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => {
  return { data: Genres, isLoading: false, error: false };
};

export default UseGenres;
