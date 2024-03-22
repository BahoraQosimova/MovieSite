import { Fragment, useEffect, useState } from "react";
import "./singlePage.css";
import { useParams } from "react-router";
import { privateApi } from "../../services/Axios";

const SinglePage = () => {
  const [myMovie, setMyMovie] = useState({});
  const [genre, setGenre] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { id } = useParams();
  const movieId = id.split("-");

  const getSingle = async () => {
    const singleMovie = await privateApi.get(
      `/movie/${movieId[movieId.length - 1]}`
    );
    setMyMovie(singleMovie);
    setGenre(singleMovie.genres);
    setCompanies(singleMovie.production_companies);
    console.log(companies);
    // console.log(singleMovie)
  };
  useEffect(() => {
    getSingle();
  }, []);

  return (
    <div className="singlePage_container">
      <div className="mainSingleInfo">
        <div className="singleBanner">
          <img
            src={`https://image.tmdb.org/t/p/w500/${myMovie?.poster_path}`}
            alt="rasmcha"
          />
          <div className="genres">
            {genre?.map((item, idx) => {
              return (
                <span key={idx}>
                  {idx === 0 ? `${item?.name}` : ` / ${item?.name}`}
                </span>
              );
            })}
          </div>
          <h3>{myMovie?.release_date}</h3>
        </div>
        <div className="singleBanner_info">
          <div className="movieName">{myMovie?.title}</div>
          <p className="aboutMovie">{myMovie?.overview}</p>

          {/* companies logos in here */}

          <div className="companies">
            {myMovie?.production_companies?.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {item?.logo_path && (
                    <div className="companyResult">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${item?.logo_path}`}
                        alt="rasmcha"
                      />
                      <h3>{item?.name}</h3>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
