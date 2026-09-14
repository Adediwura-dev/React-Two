import "./Products.css";
import ProductsLogo from "../../Components/ui/productsComponent/productsLogo/ProductsLogo";
import ProductsHero from "../../Components/ui/productsComponent/productsHero/ProductsHero";
import ProductsSection1 from "../../Components/ui/productsComponent/productsSection1/ProductsSection1";
import ProductsSection2 from "../../Components/ui/productsComponent/productsSection2/ProductsSection2";
import ProductsSection3 from "../../Components/ui/productsComponent/productsSection3/ProductsSection3";
import ProductsSection4 from "../../Components/ui/productsComponent/productsSection4/ProductsSection4";
import ProductsSection5 from "../../Components/ui/productsComponent/productsSection5/ProductsSection5";
import ProductsSection6 from "../../Components/ui/productsComponent/productsSection6/ProductsSection6";
import CarouselSection from "../../Components/ui/productsComponent/carouselSection/CarouselSection";
import AIProductsSection from "../../Components/ui/productsComponent/aiproductsSection/AIProductsSection";

const Products = () => {
    return (
        <div>
            <ProductsLogo/>
            <ProductsHero/>
            <ProductsSection1/>
            <ProductsSection2/>
            <ProductsSection3/>
            <ProductsSection4/>
            <CarouselSection/>
            <ProductsSection5/>
            <AIProductsSection/>
            <ProductsSection6/>
        </div>
    )
}

export default Products;