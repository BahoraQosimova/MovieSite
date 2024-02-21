
import "swiper/swiper-bundle.css";
import { privateApi } from "../../services/axios";
import InfoBy from "../InfoBy/InfoBy";
// import "./topRated.css";

const TopRated = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    const getTopData = async () => {
      try {
        const response = await privateApi.get("movie/top_rated");
        setTop(response.data.results);
      } catch (error) {
        console.error("Error fetching top rated data:", error);
      }
    };

    getTopData();
  }, []);

  return (

  );
};

export default TopRated;
