import React from "react";
import { Movie } from '../../services/serviceApi';
import { useEffect, useState } from "react";
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
