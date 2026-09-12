import "./Products.css";
import ProductsLogo from "../../components/ui/productsComponent/productsLogo/ProductsLogo";
import ProductsHero from "../../Components/ui/productsComponent/productsHero/ProductsHero";
import ProductsSection1 from "../../Components/ui/productsComponent/productsSection1/ProductsSection1";
import ProductsSection2 from "../../Components/ui/productsComponent/productsSection2/ProductsSection2";

const Products = () => {
    return (
        <div>
            <ProductsLogo/>
            <ProductsHero/>
            <ProductsSection1/>
            <ProductsSection2/>
        </div>
    )
}

export default Products;