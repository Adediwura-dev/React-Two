import "./Cardsforproducts2.css";

const Cardsforproducts2 = ({ card, newText, Text2, backgroundclr }) => {
  return (
    <div className="Cardsforproducts2-container" style= {{backgroundColor: backgroundclr}}>
      <div className="imageContainer3">
        <img src={card} alt="" />
      </div>
      <p className="newText">{newText}</p>
      <p className="Text2">{Text2}</p>
    </div>
  );
};

export default Cardsforproducts2;
