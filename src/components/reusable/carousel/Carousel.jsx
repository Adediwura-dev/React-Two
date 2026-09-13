import { useState } from "react";
import Button from "../buttons/Button";
import "./Carousel.css";

import geminiLive from "../../../assets/Videos/gemini-live.mp4";
import create from "../../../assets/Videos/imagegen.mp4";
import learn from "../../../assets/Videos/canvas-newest.mp4";
import plan from "../../../assets/Videos/videogen.mp4";

const slides = [
  {
    text: "Gemini Live",
    innerText: "Have a conversation about anything around you or on your screen.",
    video: geminiLive,
  },
  {
    text: "Canvas",
    innerText: "Go from prompt to prototype: Create games, apps, infographics and more.",
    video: learn,
  },
  {
    text: "Image generation",
    innerText: "Turn your idea into stunning images in seconds.",
    video: create,
  },
  {
    text: "Video generation",
    innerText: "Transform your photos into short video clips.",
    video: plan,
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carouselContainer">
    <div className="carousel">

      <div className="carousel-content">

        {/* TEXT + LEFT ARROW */}
        <div className="text-section">

          <button
            className="arrow-button left-arrow"
            onClick={previousSlide}
          >
            ←
          </button>

          <div className="videoText">
            <h2>{slides[activeSlide].text}</h2>

            <p>{slides[activeSlide].innerText}</p>

            <Button name="Create" />
          </div>

        </div>

        {/* VIDEO + RIGHT ARROW */}
        <div className="video-section">

          <video
            className="video"
            autoPlay
            muted
            loop
            playsInline
            key={slides[activeSlide].video}
          >
            <source
              src={slides[activeSlide].video}
              type="video/mp4"
            />
          </video>

          <button
            className="arrow-button right-arrow"
            onClick={nextSlide}
          >
            →
          </button>

        </div>

      </div>

      {/* DOTS */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Carousel;