import Skeleton from "react-loading-skeleton";
import Movie from "../../services/serviceApi";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
const AboutPage = () => {
  const [date, setDate] = useState(null);
  const [ata, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genresID, setGenresID] = useState("");
  const [selectedPage, setSelectedPage] = useState(0);
  const handlePageClick = (data) => {
    setSelectedPage(data.selected);
  };
  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      const { response } = await new Movie().getGeneralSearch(
        "&page=${selectedPage+ 1}",
        "&with_genres=${genresID}",
        "&primary_release_data.lte=${date}"
      );
      if (response) {
        setLoading(false);
        setdata(response);
      }
    };
    handleSearch();
  }, [genresID, date]);

  return (
    <div className="about_container">
      <div className="search_btn">
        <select name="" id="">
          {genres.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
        <input type="data" onChange={(e) => setdata(e.target.value)} />
        <button className="btn_solid">Search</button>
      </div>
      <div className="search_data">
        {loading ? (
          date?.results.map((item) => (
            <div key={item?.id} className="search_item"></div>
          ))
        ) : (
          <Skeleton
            containerClassName="skeleton"
            width={250}
            height={400}
            count={3}
          />
        )}
      </div>
    </div>
  );
};

export default AboutPage;
