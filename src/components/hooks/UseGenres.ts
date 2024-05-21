import UseData from "./UseData";

interface Genre {
  id: number;
  name: string;
}

const UseGenres = () => UseData<Genre>("/genres");

export default UseGenres;
