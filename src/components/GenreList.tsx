import UseGenres from "./hooks/UseGenres";

const GenreList = () => {
  const { genres } = UseGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
