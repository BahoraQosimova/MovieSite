import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// import { privateApi } from "../../services/Axios";

const Upcoming = () => {
  const [newMovie, setNewMovie] = useState([]);

  const newMovies = async () => {
    // const movies = await privateApi.get("movie/upcoming");
    setNewMovie(movies.results);
    console.log(newMovie);
  };

  useEffect(() => {
    newMovies();
  }, []);

  return (
    <>
      <div className="upComing">
        <h2>upComing</h2>
        <div className="upComing-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              dynamicBullets: true,
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {newMovie.slice(1, 10).map((item, idx) => {
              return (
                <SwiperSlide key={idx} className="top_item">
                  <Link
                    to={`/singlePage/${item?.title
                      ?.replaceAll(" ", "-")
                      .toLowerCase()}-${item?.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                      alt="rasmcha"
                    />
                    <h3 className="description">{item.title}</h3>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
