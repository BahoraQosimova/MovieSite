import { useParams } from "react-router";
import SinglePage from "../SinglePage/SinglePage";
// import "./infoPage.css";
import { Similar, TopRated } from "../../components";
import { randomArray } from "../../utils/randomArray";

const InfoPage = () => {
  const { id } = useParams();
  const movieId = id.split("-")[0];

  return (
    <div className="single_container">
      <SinglePage movieId={movieId} />
      <Similar movieId={movieId} />
      <InfoBy title={"Similar"}>
        {TopRated?.results?.sort(randomArray).map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="rated_box">
              <img
                className="slide_img"
                src={imageW300(item?.poster_path)}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </InfoBy>
    </div>
  );
};

export default InfoPage;
