import "./ProductsSection4.css";
import newIcon from "../../../../assets/GoogleProducts/imgi_5_gemini-update.png";
import Button from "../../../reusable/buttons/Button"

const ProductsSection4 = () => {
  return (
    <div>
      <div className="sectionFourProductsContainer">
        <img src={newIcon} alt="Icon" />
        <h2>Chat with Gemini, your personal AI assistant</h2>
        <Button name="Try it now" />
      </div>
    </div>
  );
};

export default ProductsSection4;
