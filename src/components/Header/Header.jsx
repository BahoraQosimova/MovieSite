import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import Movie from "../../services/serviceApi";
const Header = () => {
  const arrayLinks = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "Search", path: "/search" },
  ];

  const [searchedMovie, setSearchedMovie] = useState(null);

  const handleSearch = async (text) => {
    const { response } = await new Movie().getSearchedMovie(text);
    setSearchedMovie(response);
  };

  return (
    <>
    <header>
      <Link to="/">
        <div className="header_logo">
          <img src={Logo} alt="Logo" />
          <h2>
            movie<span>App</span>
          </h2>
        </div>
      </Link>

      <div className="header_nav">
        <ul>
          {arrayLinks?.map((item, idx) => {
            return (
              <li key={idx}>
                {" "}
                <Link to={item.path}> {item.title} </Link>{" "}
              </li>
            );
          })}
          <li className="searchingPanel">
            <input
              type="text"
              className="searchInput"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="searching movies"
            />

            {searchedMovie?.results?.length > 2 && (
              <div className="searchResponse">
                {searchedMovie?.results?.map((item, idx) => (
                  <Link
                    to={`/singlePage/${item?.title
                      ?.replaceAll(" ", "-")
                      .toLowerCase()}-${item?.id}`}
                    key={idx}
                  >
                    <div className="searchedMovie">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                        alt="rasm"
                      />
                      <h4>{item?.original_title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </header></>
  );
};

export default Header;
