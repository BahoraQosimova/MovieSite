import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "./toprated.css";
import { Link } from "react-router-dom";
import Movie from "../../services/serviceApi";

const TopRated = () => {
  const [rated_image, setRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTopMovies = async () => {
    setIsLoading(true);
    const { response } = await new Movie().getTopData();
    setIsLoading(false);
    setRated(response);
  };

  useEffect(() => {
    getTopMovies();
  }, []);

  console.log(rated_image);
  return (
    <div className="top_rated">
      <h2>TOP_RATED</h2>
      <div className="top_rated-slider">
        <Swiper
          modules={(Navigation, Pagination, Autoplay)}
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
          {rated_image?.results?.slice(1, 10).map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className={isLoading ? "top_item active" : "top_item"}
              >
                <Link
                  to={`/singlePage/${item?.title
                    ?.replaceAll(" ", "-")
                    .toLowerCase()}-${item?.id}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  />
                  <h3 className="description">{item?.title}</h3>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
