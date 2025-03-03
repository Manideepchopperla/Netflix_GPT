import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || movieNames.length === 0) {
    return null;
  }

  return (
    <div className="p-4 bg-gray-900 text-white bg-opacity-80"> 
      <h2 className="text-xl font-bold text-center mb-4">Recommended Movies</h2>
      <div className="flex flex-col gap-6">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index] || []} // Handle missing results
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
