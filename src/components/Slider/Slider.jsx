import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./slider.css";
import { Link } from "react-router-dom";
import { privateApi } from "../../services/Axios";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await privateApi.get("/movie/popular");
      setIsLoading(false);
      setBanner(response.results);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        dynamicBullets: true,
      }}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {!isLoading ? (
        banner?.slice(0, 10).map((item, idx) => {
          return (
            <SwiperSlide className="swiperItem" key={idx}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt="rasmcha"
              />

              <div className="description">
                <h1 className="title">{item?.title}</h1>

                <p className="desc">{`${item?.overview.slice(0, 50)} . . .`}</p>

                <div className="toLocate">
                  <div className="showData">
                    {item?.release_date.replaceAll("-", "/")}
                  </div>

                  <Link
                    to={`/singlePage/${item?.title
                      ?.replaceAll(" ", "-")
                      .toLowerCase()}-${item?.id}`}
                  >
                    <button>show more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      ) : (
        <Loading />
      )}
    </Swiper>
  );
};

export default Slider;
