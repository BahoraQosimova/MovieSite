import { Home, AboutPage, InfoPage, SinglePage } from "./pages/index";
import {
  Header,
  Footer,
  InfoBy,
  Loading,
  Similar,
  Slider,
  TopRated,
  Upcoming,
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
        <Route element={<AboutPage />} path="/about" />
        <Route element={<InfoPage />} path="/about/:id" />
        <Route element={<SinglePage />} path="/about/:id" />

        <Route element={<Similar />} path="/about/:id" />
        <Route element={<Slider />} path="/about/:id" />
        <Route element={<TopRated />} path="/about/:id" />
        <Route element={<Upcoming />} path="/about/:id" />
        <Route element={<InfoBy />} path="/about/:id" />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
