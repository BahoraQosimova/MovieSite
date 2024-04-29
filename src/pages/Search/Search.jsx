import { useEffect, useState } from "react";
import "./search.css";
import Movie from "../../services/serviceApi";

const SearchingPage = () => {
  const [chosenGenre, setChosenGenre] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchById = async () => {
    const { response } = await new Movie().getMoviebyGenre(chosenGenre);
    setSearchedMovies(response.results);
  };

  const handleGenre = (genreId) => {
    setChosenGenre(`&with_genres=${genreId}`);
    console.log(searchedMovies);
  };

  console.log(searchedMovies);

  useEffect(() => {
    searchById();
  }, [chosenGenre]);

  return (
    <div className="searching">
      <div className="searchingArea">
        <select
          name=""
          id="selectGenre"
          onChange={(e) => handleGenre(e.target.value)}
        >
          {genres.map((item, idx) => {
            return (
              <option value={item.id} key={idx} className="genreItem">
                {item.name}
              </option>
            );
          })}
        </select>
        <input type="text" placeholder="actor" id="actors" />
      </div>

      <div className="searchingResults">
        {searchedMovies?.map((item) => {
          return (
            <div className="chosenMovie" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt="rasmcha"
              />
              <h4>{item?.original_title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchingPage;
