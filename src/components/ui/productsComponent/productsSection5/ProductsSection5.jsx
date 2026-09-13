import Cards from "../../../reusable/cards/Cards";
import gadgetsImage from "../../../../assets/android.png";
import gadgetsImage2 from "../../../../assets/GoogleProducts/imgi_109_mbg2026-product-page-hardware-portfolio.webp";
import "./ProductsSection5.css"

const ProductsSection5 = () => {
  return (
    <div className="ps5Container">
      <h2>Get more done with Android and Pixel</h2>
      <div className="gadgets">
        <Cards image={gadgetsImage} description={"All things Android"} desc2={"Check out a whole world of devices that work better together, plus AI features to help throughout your day."} />
        <Cards image={gadgetsImage2} description={"Our pixel portfolio"} desc2={"See the latest Pixel lineup — from phones and watches, to earbuds and tablets."}/>
      </div>
    </div>
  );
};

export default ProductsSection5;
