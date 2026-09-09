import About from "./Pages/about/About";
import AboutHero from "./Components/ui/aboutComponents/aboutHero/AboutHero";
import Header from "./static/header/Header";
import Button from "./Components/reusable/buttons/Button";

const App = () => {
  return (
    <div>
      <h1>{/* Getting Started */}</h1>
      <Header />
      <About />
      <AboutHero />
      <Button name="Buy Now" />
      <Button name="Add to Cart" />
      <Button name="Check it out" />
    </div>
  );
};

export default App;
