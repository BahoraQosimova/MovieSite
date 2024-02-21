import { useParams } from "react-router";

import { SinglePage } from "../SinglePage/SinglePage";
import "./infoPage.css";

const InfoPage = () => {
  const { id } = useParams();
  const MovieId = id.split("-")[0];
  const Similary = ({ movieId }) => {
    const [dataSimilary, setDataSimilary] = useState(null);
  };
  useEffect(() => {
    const handleGetSingle = async () => {
      const { response } = await new Movie().getSimilar(movieId);
      setDataSimilary(response);
    };
    handleGetSingle();
  }, [movieId]);

  return (
    <div className="single_container">
      <SinglePage movieId={movieId} />
    </div>
    // <div className="info_page">
    //   <div className="container">
    //     <div className="img">
    //       <img src={imageW500(singleData?.poster_path)} alt="" />
    //     </div>
    //     <div className="info_about-movie">
    //       <div className="title">
    //         <div className="title_box">
    //           <h1 className="name_movie">{singleData?.title}</h1>{" "}
    //           <span className="name_movie">({year.getFullYear()})</span>
    //         </div>
    //         <div className="title_second_box">
    //           <ul>
    //             {singleData?.genres?.map((item) => (
    //               <li key={item?.id} className="ganres_movie">
    //                 {item?.name}
    //               </li>
    //             ))}
    //             <li className="popular">Popularity:{singleData?.popularity}</li>
    //             <div className="description">
    //               <li className="Review">Review:</li>
    //               <li className="name_movie_description">
    //                 {singleData?.overview}
    //               </li>
    //             </div>
    //           </ul>{" "}
    //           <div className="img">
    //             <img
    //               src={imageW500(singleData?.backdrop_path)}
    //               alt=""
    //               className="img"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default InfoPage;
