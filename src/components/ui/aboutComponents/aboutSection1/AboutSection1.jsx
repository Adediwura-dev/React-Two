import Cards from "../../../reusable/cards/Cards";
import "./AboutSection1.css";
import exploreProductsImage from "../../../../assets/Image1.webp";
import researchImage from "../../../../assets/Image2.webp";
import computerScienceImage from "../../../../assets/Image3.png";

const AboutSection1 = () => {
  return (
    <div className="sectionOneContainer">
      <Cards
        image={exploreProductsImage}
        description="Explore our products and features across Search, Google Workspace, and more"
      />
      <Cards
        image={researchImage}
        description="Learn all about our leading AI models — and discover their capabilities"
      />
      <Cards
        image={computerScienceImage}
        description="See how we’re tackling some of the most challenging problems in computer science"
      />
    </div>
  );
};

export default AboutSection1;
