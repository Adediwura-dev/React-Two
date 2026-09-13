import "./ProductsSection3.css";
import Cardsforproducts2 from "../../../reusable/cardsforproducts2/Cardsforproducts2";
import Card from "../../../../assets/imgi_386_cts-searchsite-curve (1).webp";
import Card2 from "../../../../assets/lens-still-update.png";

import Cardsforproducts3 from "../../../reusable/cardsforproducts3/Cardsforproducts3";

const ProductsSection3 = () => {
  return (
    <div className="ProductsSection3-container">
      <div className="ProductsSection3-left">
        <Cardsforproducts2
          card={Card}
          newText={"CIRCLE TO SEARCH"}
          Text2={
            "Circle, highlight or tap to search anything on your Android device."
          }
        />

        <Cardsforproducts3
          newText={"ai mode"}
          Text2={
            "Ask anything and get an AI-powered response. Then, keep exploring with follow-up questions and web links."
          }
          backgroundClr={"#FCE8E6"}
        />
      </div>

      <div className="ProductsSection3-right">
        <Cardsforproducts3
          newText={"how search works"}
          Text2={
            "Get the details on how Search works — from the approach we take, to the technology behind it."
          }
          backgroundClr={"#E6F4EA"}
        />

        <Cardsforproducts2
          card={Card2}
          newText={"LENS"}
          Text2={
            "Go beyond words: Search with your camera, an image or whatever’s on your screen."
          }
          backgroundClr={"#FEF7E0"}
        />
      </div>
    </div>
  );
};

export default ProductsSection3;
