import Button from "../../../reusable/buttons/Button";
import "./aboutSection4.css";

const AboutSection4 = () => {
  return (
    <div className="sectionFourContainer">
      <div className="inner-container">
        <div>
          <h2>Get the latest news from Google in your inbox</h2>
          <p>
            Sign up to receive top stories from the week — from product
            announcements, to everyday tips.
          </p>
        </div>

        <div>
          <Button name="Subscribe" backgroundColor="#E0EBFC" color="#1755B9" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
