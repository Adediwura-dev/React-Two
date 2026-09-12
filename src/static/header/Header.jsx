import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <section className="logo">
        <img src="./google-logo-about.svg" alt="Logo" />
      </section>
      <section className="navigation">
        <Link to="/">
          <div>
            <nav className="aboutNav">About</nav>
            <div className="rule"></div>
          </div>
        </Link>
        <Link to="/products">
          <nav>Products</nav>
        </Link>

        <nav>Company Info</nav>
        <nav>News</nav>
      </section>
    </div>
  );
};

export default Header;
