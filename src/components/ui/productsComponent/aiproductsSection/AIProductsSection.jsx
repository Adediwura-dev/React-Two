import { useState } from "react";
import "./AIProductsSection.css";

import rocketVideo from "../../../../assets/flow-flowtv.mp4";
import rocketImage from "../../../../assets/videoframe_3039.png";

import notebookImage from "../../../../assets/nblm.png";

import labsVideo from "../../../../assets/labsgoogle-smaller.mp4";
import labsImage from "../../../../assets/GoogleProducts/imgi_321_labsgoogle.webp";

import iCon from "../../../../assets/labs.png"

const experiments = [
  {
    title: "Flow",
    description: "Create cinematic clips, scenes and stories with our AI filmmaking tool.",
    type: "video",
    video: rocketVideo,
    image: rocketImage,
    button: "Check it out",
  },

  {
    title: "Gemini notebook",
    description: "Your personalized research AI assistant, right at your fingertips.",
    type: "image",
    image: notebookImage,
    button: "Check it out",
  },

  {
    title: "Google Labs",
    description: "Explore AI experiments from across the company.",
    type: "video",
    video: labsVideo,
    image: labsImage,
    button: "Visit",
  },
];

const AIProductsSection = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % experiments.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + experiments.length) % experiments.length
    );
  };

  return (
    <section className="ai-experiments">

      <div className="ai-experiments-header">

        <div className="experiment-icon">
          <img src={iCon} alt="" />
        </div>

        <h2>Try new AI products and experiments</h2>

      </div>

      <div className="experiment-carousel">

        <button
          className="experiment-arrow left"
          onClick={previousSlide}
        >
          ←
        </button>

        <div className="experiment-cards">

          {experiments.map((experiment, index) => {

            const isActive = activeSlide === index;

            return (
              <div
                className={`experiment-card ${
                  isActive ? "active" : "inactive"
                }`}
                key={index}
              >

                <div className="experiment-media">

                  {experiment.type === "video" && isActive ? (

                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src={experiment.video}
                        type="video/mp4"
                      />
                    </video>

                  ) : (

                    <img
                      src={experiment.image}
                      alt={experiment.title}
                    />

                  )}

                </div>


                {isActive && (

                  <div className="experiment-content">

                    <h3>
                      {experiment.title}
                    </h3>

                    <p>
                      {experiment.description}
                    </p>

                    <button className="experiment-button">
                      {experiment.button}
                    </button>

                  </div>

                )}

              </div>
            );
          })}

        </div>


        <button
          className="experiment-arrow right"
          onClick={nextSlide}
        >
          →
        </button>

      </div>


      <div className="experiment-dots">

        {experiments.map((_, index) => (

          <button
            key={index}
            className={`experiment-dot ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => setActiveSlide(index)}
          />

        ))}

      </div>

    </section>
  );
};

export default AIProductsSection;