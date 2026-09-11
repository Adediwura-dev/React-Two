import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Resources</h3> <a href="#">Blog</a>
          <a href="#">Brand Resource Center</a>
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">Help Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Locations</a>
          <a href="#">Press resources</a>
        </div>
        <div className="footer-column">
          <h3>Outreach and initiatives</h3>
          <a href="#">Accessibility</a>
          <a href="#">Crisis Response</a>
          <a href="#">Google.org</a>
          <a href="#">Google for Health</a>
          <a href="#">Grow with Google</a>
          <a href="#">Learning</a>
          <a href="#">Public Policy</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="footer-column">
          <h3>Research and technology</h3>
          <a href="#">Google AI</a>
          <a href="#">Google Cloud</a>
          <a href="#">Google DeepMind</a>
          <a href="#">Google for Developers</a>
          <a href="#">Google Labs</a>
          <a href="#">Google Research</a>
        </div>
        <div className="footer-column">
          <h3>More about us</h3>
          <a href="#">Around the globe</a>
          <a href="#">Human rights</a>
          <a href="#">Safety Center</a>
          <a href="#">Supplier responsibility</a>
          <a href="#">Transparency Center</a>
          <a href="#">Transparency Report</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <span className="google-logo">Google</span> 
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer-right">
          <a href="#">Help</a>
          <a href="#" className="language">
            English <span>▼</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
