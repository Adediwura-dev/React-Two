import "./ProductsHero.css";
import HeroImg from "../../../../assets/GoogleProducts/imgi_13_mbg2026-product-page-hero-image.webp";
import Button from "../../../reusable/buttons/Button";

const ProductsHero = () => {
  return (
    <div className="ProductsHeroContainer">
      <h1>Helpful products, built with you in mind</h1>
      <div className="button-box">
        <div>
          <a href="">Search in new ways</a>
        </div>
        <div>
          <a href="">Chat with Gemini</a>
        </div>
        <div>
          <a href="">Try AI tools</a>
        </div>
        <div>
          <a href="">Explore more products</a>
        </div>
      </div>
      <img src={HeroImg} alt="Hero Image" />
    </div>
  );
};

export default ProductsHero;
