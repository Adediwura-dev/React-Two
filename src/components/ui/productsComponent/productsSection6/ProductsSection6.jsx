import "./ProductsSection6.css";
import Cardsforproducts2 from "../../../reusable/cardsforproducts2/Cardsforproducts2";
import CARD from "../../../../assets/GoogleProducts/imgi_322_photos.webp";
import CARD2 from "../../../../assets/GoogleProducts/imgi_323_aerial-view-spear-street-u32-1-1.webp";

import Cardsforproducts3 from "../../../reusable/cardsforproducts3/Cardsforproducts3";

const ProductsSection6 = () => {
  return (
    <div className="ProductsSection6-container">
      <div>
        <h2>Discover more ways to use AI in our <br />products</h2>
      </div>

      <div className="Section6-container">

      <div className="ProductsSection6-left">
        <Cardsforproducts2
          card={CARD}
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
          backgroundClr={"#e8f0fe"}
        />
      </div>

      <div className="ProductsSection6-right">
        <Cardsforproducts3
          newText={"how search works"}
          Text2={
            "Get the details on how Search works — from the approach we take, to the technology behind it."
          }
          backgroundClr={"#e8f0fe"}
        />

        <Cardsforproducts2
          card={CARD2}
          newText={"LENS"}
          Text2={
            "Go beyond words: Search with your camera, an image or whatever’s on your screen."
          }
          backgroundclr={"#e8f0fe"}
        />
      </div>
      </div>
    </div>
  );
};

export default ProductsSection6;
