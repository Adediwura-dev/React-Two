import "./ProductsSection2.css";
import newIcon from "../../../../assets/icon2.png";
import Button from "../../../reusable/buttons/Button";

const ProductsSection2 = () => {
  return (
    <div>
      <div className="productsSectionTwoContainer">
        <img src={newIcon} alt="Icon" />
        <h2>Search in new ways</h2>
        <Button name="Download the Google app" />
      </div>
    </div>
  );
};

export default ProductsSection2;
