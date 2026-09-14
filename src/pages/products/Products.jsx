import "./Products.css";
import ProductsLogo from "../../components/ui/productsComponent/productsLogo/ProductsLogo";
import ProductsHero from "../../components/ui/productsComponent/productsHero/ProductsHero";
import ProductsSection1 from "../../components/ui/productsComponent/productsSection1/ProductsSection1";
import ProductsSection2 from "../../components/ui/productsComponent/productsSection2/ProductsSection2";
import ProductsSection3 from "../../components/ui/productsComponent/productsSection3/ProductsSection3";
import ProductsSection4 from "../../components/ui/productsComponent/productsSection4/ProductsSection4";
import ProductsSection5 from "../../components/ui/productsComponent/productsSection5/ProductsSection5";
import ProductsSection6 from "../../components/ui/productsComponent/productsSection6/ProductsSection6";
import CarouselSection from "../../components/ui/productsComponent/carouselSection/CarouselSection";
import AIProductsSection from "../../components/ui/productsComponent/aiproductsSection/AIProductsSection";

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