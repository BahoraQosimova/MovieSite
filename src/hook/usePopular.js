import { useEffect, useState } from "react";
import Movie from "../services/serviceApi";

const usePopular = () => {
  const [popularState, setPopularState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });
  // const clickMe = (obj)=>{
  //     console.log(obj);
  // }
  useEffect(() => {
    const handleGetPopularMovie = async () => {
      const { responce, error } = await new Movie().getPopular();
      if (responce) {
        setPopularState({
          data: responce,
          error: null,
          isLoading: false,
        });
      }
      if (error) {
        setPopularState({
          data: null,
          error: null,
          isLoading: false,
        });
      }
    };
    handleGetPopularMovie();
  }, []);
  return { data, error, isLoading };
};

export default usePopular;
