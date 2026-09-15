import "./CardsforCompany1.css";

const CardsforCompany1 = ({ text, img }) => {
  return (
    <div className="textForCompany">
      <p>{text}</p>
      <div className="imageForCompany">
        <img src={img} alt="Company" />
      </div>
    </div>
  );
};

export default CardsforCompany1;
