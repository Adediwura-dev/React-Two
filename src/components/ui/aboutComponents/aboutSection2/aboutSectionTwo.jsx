import "./aboutSectionTwo.css";
import Button from "../../../reusable/buttons/Button";
import sectionTwoImage from "../../../../assets/Image4.webp";

const AboutSection2 = () => {
    return (
      <div className="sectionTwoContainer">
        <div className="innerContainer">
          <h2>AlphaGenome Atlas: a high-resolution map of human DNA</h2>
          <p>
            This AI-powered database maps all 9 billion genetic variants across
            the human genome to help scientists make biological discoveries
            faster.
          </p>
          <Button name="Check it out" />
        </div>
        <div>
            <img src={sectionTwoImage} alt="Section 2 Image" />
        </div>
      </div>
    );
}

export default AboutSection2;