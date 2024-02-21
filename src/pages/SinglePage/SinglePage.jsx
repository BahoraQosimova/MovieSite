import { useEffect, useState } from "react";

import "./singlePage.css";
import { Movie } from "../../services/serviceApi";
import { imageW500 } from "../../utils/ImageURL";

const SinglePage = ({ movieId }) => {
  const [error, setError] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGetSingle = async () => {
      setIsLoading(true);
      const { response, error } = await new Movie().getSingle(movieId);
      if (response) {
        setIsLoading(false);
        setSingleData(response);
      }
      if (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    handleGetSingle();
  }, [movieId]);
  const year = new Data(singleData?.release_data)
  return (
   <div className="single_header">
    <div className="slide_content">
        <h1>{singleData?.original_title}{" "}</h1>
    </div>
   </div>
  );
};

export default SinglePage;
