import "./Cards.css";

const Cards = ({ description, image, desc2 }) => {
  return (
    <div className="cardContainer">
        <div className="imageContainer">
            <img src={image} alt="Card Image" />
        </div>
        <p>{description}</p>
        <p className="desc2">{desc2}</p>
    </div>
  );
};

export default Cards;
