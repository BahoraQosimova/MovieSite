import Logo from "../../assets/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const Links = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
  ];
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={Logo} alt="" />
          <h1>
            Movie <span className="helper_text">App</span>
          </h1>
        </div>
        <div className="header_nav">
          <ul>
            {Links.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
