import { Header, Footer } from "./components/index";

// import { HomePage, AboutPage, InfoPage } from "./pages/index";
import { Routing } from "./libs";
import "./styles.css";
function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}
export default App;
