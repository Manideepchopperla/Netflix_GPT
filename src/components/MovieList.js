import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title)
  return (
    <div className="px-6">
      <h1 className="text-lg font-bold md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;