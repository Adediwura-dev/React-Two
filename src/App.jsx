import About from "./Pages/about/About";
import AboutHero from "./Components/ui/aboutComponents/aboutHero/AboutHero";
import Header from "./static/header/Header";
import Button from "./Components/reusable/buttons/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./Pages/company/Company";
import Products from "./Pages/products/Products"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>{/* Getting Started */}</h1>

      {/* <AboutHero /> */}
      <Button name="Buy Now" />
      <Button name="Add to Cart" />
      <Button name="Check it out" />
    </div>
  );
};

export default App;
