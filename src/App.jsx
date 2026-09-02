import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="design">
      <div className="Header-Box">
        <div className="Box1">
          <h3>"Keep creating. Its <br />our imperfections <br /> that shape the most <br /> human kind of <br /> perfection."</h3>
          <p>Someone on internet, 2024</p>
          {/* <img src="./src/assets/box.png" alt="" /> */}
        </div>
        <div className="Box2">
          <p className="first-text">Project</p>
          <h1>25+</h1>
          <p>25+ Projects is Done!</p>
        </div>
        <div className="Box3">
         <h2>
          Any ideas? lets work <br /> together!
          </h2> 
          <div>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default App;
