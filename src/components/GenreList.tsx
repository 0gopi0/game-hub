import UseGenres from "./hooks/UseGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
