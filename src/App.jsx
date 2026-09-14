import About from "./pages/about/About";
import Header from "./static/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./static/footer/Footer";
import Products from "./pages/products/Products";
import Company from "./pages/company/Company";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/company-info" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
