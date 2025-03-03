import Header from "./Header";
import { API_OPTIONS, BANNER } from "../utils/constants";
import Lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import genAIModel from "../utils/genai";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langMode = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieInTmdb = async (movie) => {
    const curr = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const data = await curr.json();
    return data.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: "${searchText.current.value}". Only give me names of 5 movies, comma-separated like this example: Animal, Bhahubali, Pushpa, Devara, RRR. Dont give any statements like "There aren't many readily identifiable Indian films that perfectly blend horror and romance as a primary genre combination. The overlap is usually minimal. To offer something close
focusing on elements of each
I'd suggest: Stree"`;
    console.log(prompt);
    const result = await genAIModel.generateContent([prompt]);
    if (!result?.response?.text()) return;
    const moviesList = result?.response?.text()?.split(",").map((movie) => movie.trim());
    const promiseArray = moviesList.map((movie) => searchMovieInTmdb(movie));
    const moviesResult = await Promise.all(promiseArray);
    console.log(moviesResult);
    dispatch(addGptMovieResult({ movieNames: moviesList, movieResults: moviesResult }));
  };

  return (
    <div className="relative w-full">
      <Header />
      {/* Banner */}
      <div className="relative">
        <img src={BANNER} alt="bg-img" className="w-full h-[400px] object-cover" />
      </div>

      {/* Search Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 p-8 bg-black/80 rounded-lg flex justify-center items-center"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={Lang[langMode].gptSearchPlaceholder}
          className="p-2 text-md rounded-md text-white w-[70vw] border-[#867979] bg-transparent border-[1px] outline-none"
        />
        <button
          className="text-white bg-red-700 p-2 mx-4 w-[10vw] rounded-md"
          onClick={handleGptSearch}
        >
          {Lang[langMode].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
