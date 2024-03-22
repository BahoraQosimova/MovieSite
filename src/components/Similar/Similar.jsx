import { useEffect, useState } from "react";
import Movie from "../../services/serviceApi";
const Similar = ({ movieId }) => {
  const [dataSimilary, setSimilary] = useState(null);
  useEffect(() => {
    const handlegetSingle = async () => {
      const { response } = await new Movie().getSimilar(movieId);
      setSimilary(response);
    };
    handlegetSingle();
  }, [movieId]);
  return <></>;
};

export default Similar;
