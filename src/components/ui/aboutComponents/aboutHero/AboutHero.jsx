import "./AboutHero.css";
import Button from "../../../../Components/reusable/buttons/Button";

const AboutHero = () => {
  return (
    <div className="aboutHeroContainer">
      <div className="aboutHeroWrapper">
        <h1>
          Introducing <br /> Gemini 3.8 Flash <br /> and 3.8 Flash Cyber
        </h1>
        <p>
          Our newest Gemini models deliver next-generation intelligence for
          agentic workflows and cybersecurity.
        </p>

        <Button name="Learn more" />

      </div>
    </div>
  );
};

export default AboutHero;
