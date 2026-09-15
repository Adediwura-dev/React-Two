import "./CompanyCards.css";
import CardOne from "../../../../assets/CompanyCards/firstcompanycard.jpg"
import CardTwo from "../../../../assets/CompanyCards/secondcompanycard.jpg"
import CardThree from "../../../../assets/CompanyCards/thirdcompanycard.webp"
import CardFour from "../../../../assets/CompanyCards/fourthcompanycard.jpg"
import CardsforCompany1 from "../../../reusable/cardsforcompany1/CardsforCompany1";

const CompanyCards = () => {
    return (
        <div className="CardsForCompany">
            <CardsforCompany1
                text="Careers"
                img={CardOne}
            />
            <CardsforCompany1
                text="Locations"
                img={CardTwo}
            />
            <CardsforCompany1
                text="Around the globe"
                img={CardThree}
            />
            <CardsforCompany1
                text="Contact us"
                img={CardFour}
            />
            
        </div>
    )
}

export default CompanyCards;
