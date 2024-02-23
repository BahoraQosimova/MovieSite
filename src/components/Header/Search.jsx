import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";
import { imageW300 } from "../../utils/ImageURL";
import { Circles } from "react-loading";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [search, setSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (SearchText) => {
    if (SearchText) {
      setIsLoading(true);
      const { response } = await new Movie().getSearchResult(SearchText);
    }
    if (response) {
      setSearch(response);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className="search">
      <div className="search_input">
        <input type="search" onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <ul className="search_status">
        {search?.results.length > 0 &&
          search?.results?.map((item) => (
            <li key={item.id}>
              {" "}
              <img src={imageW300(item?.poster_path)} alt="" />
              <h1>{item?.original_title}</h1>
            </li>
          ))}
        {isLoading && (
          <li className="search_loading">
            <Circles />
          </li>
        )}
        {search?.results?.length === 0 && (
          <li>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              size="4"
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
