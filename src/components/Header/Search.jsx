import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../services/serviceApi";
import { imageW300 } from "../../utils/ImageURL";
import { Circles } from "react-loading";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from "../../hook/useDebounce";

const Search = () => {
  const [search, setSearch] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");

  const { debounceValue } = useDebounce(searchingValue);

  const handleSearch = async (searchText) => {
    if (debounceValue) {
      setIsLoading(true);
      try {
        const { response } = await new Movie().getSearchResult(debounceValue);
        setSearch(response);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, [debounceValue]);

  return (
    <div className="search">
      <div className="search_input">
        <input
          type="search"
          onChange={(e) => setSearchingValue(e.target.value)}
        />
      </div>
      <ul className="search_status">
        {isLoading && (
          <li className="search_loading">
            <Circles />
          </li>
        )}
        {search.results.length > 0 &&
          search.results.map((item) => (
            <li key={item.id}>
              <Link
                to={`/about/${item.id}-${item.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
              >
                <img src={imageW300(item.poster_path)} alt="" />
                <h1>{item.original_title}</h1>
              </Link>
            </li>
          ))}
        {!isLoading && search.results.length === 0 && (
          <li>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              size="lg"
              color="orange"
            />
            Ma'lumot topilmadi.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Search;
