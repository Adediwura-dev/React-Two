import "./ProductsSection1.css"

import Cardsforproducts1 from "../../../reusable/cardsforproducts1/cardsforproducts1";
import Card2 from "../../../../assets/about-products-3up-google-store-aug2026-3.webp";
import Card1 from "../../../../assets/about-products-3up-support.png";
import Card3 from "../../../../assets/GoogleProducts/imgi_16_support.png";
import Card4 from "../../../../assets/GoogleProducts/imgi_17_accessibility-final.png";

const ProductsSection1 = () => {
  return (
    <div className="productsSectionOneContainer">
      <Cardsforproducts1 image2={Card1} text={"Product support"} />
      <Cardsforproducts1 image2={Card2} text={"Google Store"} />
      <Cardsforproducts1 image2={Card3} text={"Google Account"} />
      <Cardsforproducts1 image2={Card4} text={"Accessibility support"} />
    </div>
  );
};

export default ProductsSection1;
