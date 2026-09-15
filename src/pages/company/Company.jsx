import "./Company.css";
import CompanyHero from "../../components/ui/companyComponents/companyHero/CompanyHero";
import CompanyHeroText from "../../components/ui/companyComponents/companyHeroText/CompanyHeroText";
import CompanyCards from "../../components/ui/companyComponents/companyCards/CompanyCards";

const Company = () => {
  return (
    <div>
      <CompanyHero />
      <CompanyHeroText />
      <CompanyCards/>
    </div>
  );
};

export default Company;
