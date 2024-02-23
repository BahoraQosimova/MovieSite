import { Swiper } from "swiper/react";
import PropTypes from "prop-types";
// import { Autoplay } from "swiper/modules";

const InfoBy = ({ title, children }) => {
  return (
    <section className="top_rated">
      <div className="rated_container">
        <h1 className="top_rated">Top Rated</h1>
        <div className="top_rated-slider">
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper"
          ></Swiper>
        </div>
      </div>
    </section>
  );
};
InfoBy.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
export default InfoBy;
// {top.slice(0, 10).map((item) => (
//     <SwiperSlide key={item.id}>
//       <div className="rated_slides">
//         <img
//           src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
//           alt={item.title}
//         />
//         <h3 className="description">{item.title}</h3>
//       </div>
//     </SwiperSlide>
//   ))}
