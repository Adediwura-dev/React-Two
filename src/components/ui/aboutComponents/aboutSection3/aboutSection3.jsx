import "./aboutSection3.css";
import icon from "../../../../assets/icon2.png";
import Button from "../../../reusable/buttons/Button";
// import sectionThreeImage from "../../../../assets/Image5.webp";

const AboutSection3 = () => {
    return (
      <div>
        <div className="sectionThreeContainer">
          <img src={icon} alt="Icon" />
          <h2>Google around the globe</h2>
          <p>Learn about Google's work and impact around the world.</p>
          <Button name="Explore" />
        </div>
      </div>
    );
}

export default AboutSection3;