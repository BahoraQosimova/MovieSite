import { Swiper, SwiperSlide } from "swiper/react";

import { privateApi } from "../../services/axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import { imageW500 } from "../../utils/ImageURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const Slider = ({ data, ganresData, isLoading }) => {
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
  {
    data?.results?.map((item, idx) => {
      const list = item?.genre_ids;
      const FilteredList = list.map((item) =>
        ganresData?.genres?.find((ganresId) => ganresId?.id === item)
      );
    });
  }

  return (
    <>
      <Swiper>
        <SwiperSlider key={item.id} className="slider_box">
          {!isLoading ? (
            <>
              <img src={imageW500(item?.backdrop_path)} alt="" />
              <div className="slide_content">
                <div className="slide_item">
                  <h1>{item?.original_title}</h1>
                  <p>
                    {item?.overview?.length > 65 &&
                      item?.overview?.slice(0, 65) + "..."}
                  </p>
                  <div className="slide_calendar" key={item?.id}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <p>{item?.release_data}</p>
                    {FilteredList.map((item) => (
                      <p key={item?.id}>
                        {item?.name}
                        {FilteredList[FilteredList.length - 1]?.name ===
                        item?.name
                          ? " "
                          : " / "}
                      </p>
                    ))}
                  </div>
                  <Link
                    to={
                      'about/${item?.id}-${item?.title.replaceAll(" ", "-").toLowerCase()}'
                    }
                  >
                    <button>Show more...</button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass="audio-wrapper"
            />
          )}
        </SwiperSlider>
        );
        {/* })} */}
      </Swiper>
    </>
  );
};

export default Slider;
