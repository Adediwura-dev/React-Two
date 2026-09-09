import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <section className="logo">
        <img src="./google-logo-about.svg" alt="Logo" />
      </section>
      <section className="navigation">

        <div >
          <nav className="aboutNav">About</nav>
          <div className="rule"></div>
        </div>

        <nav>Products</nav>
        <nav>Company Info</nav>
        <nav>News</nav>
      </section>
    </div>
  );
};

export default Header;
