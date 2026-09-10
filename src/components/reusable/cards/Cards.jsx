import "./Cards.css";

const Cards = ({ description, image }) => {
  return (
    <div className="cardContainer">
        <div className="imageContainer">
            <img src={image} alt="Card Image" />
        </div>
        <p>{description}</p>
    </div>
  );
};

export default Cards;
