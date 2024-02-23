import Logo from "../../assets/Logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="img_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer_content">
          <div className="content">
            <h1 className="content_text">Home</h1>
            <h3 className="content_text">About</h3>
            <h3 className="content_text">About Us</h3>
            <h3 className="content_text">Our team</h3>
          </div>
          <div className="content">
            <h1 className="content_text">Partners</h1>
            <h3 className="content_text">Our Project</h3>
            <h3 className="content_text">Social Media</h3>
            <h3 className="content_text">Others</h3>
          </div>

          <div className="content">
            <h1 className="content_text">Support</h1>
            <h3 className="content_text">Support Request</h3>
            <h3 className="content_text">Contact</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
