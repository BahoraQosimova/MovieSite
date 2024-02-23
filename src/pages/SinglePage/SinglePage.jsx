import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";

const SinglePage = ({ movieId }) => {
  const [error, setError] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGetSingle = async () => {
      setIsLoading(true);
      try {
        const data = await new Movie().getNewMovies();
        setSingleData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    handleGetSingle();
  }, [movieId]);

  const year = new Date(singleData?.release_date);

  return (
    <div className="single_header">
      <div className="slide_content">
        <h1>{singleData?.original_title}</h1>
        <p>Year: {year.getFullYear()}</p>
      </div>
    </div>
  );
};

export default SinglePage;
