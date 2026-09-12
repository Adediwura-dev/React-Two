import "./Cardsforproducts1.css";

const Cardsforproducts1 = ({ text, image2 }) => {
  return (
    <div className="cardContainer2">
      <p>{text}</p>

      <div className="imageContainer2">
        <img src={image2} alt="Card-Image" />
      </div>
    </div>
  );
};

export default Cardsforproducts1;
