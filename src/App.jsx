import { Home, InfoPage, SinglePage } from "./pages/index";
import {
  Header,
  InfoBy,
  Loading,
  Similar,
  Slider,
  TopRated,
  Upcoming,
  Footer,
} from "./components/index";
import { Routes } from "react-router";
import { Route } from "react-router";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Loading />} path="/about/:id" />
        <Route element={<Home />} path="/" />
        {/* <Route element={<About />} path="/about" /> */}
        <Route element={<InfoPage />} path="/about/" />
        <Route element={<SinglePage />} path="/singlePage" />
        <Route element={<Similar />} path="/similar" />
        <Route element={<Slider />} path="/" />
        <Route element={<TopRated />} path="/top" />
        <Route element={<Upcoming />} path="/soon" />
        <Route element={<InfoBy />} path="/about" />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
