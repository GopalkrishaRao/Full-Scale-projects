import React, { useState } from 'react';
import './slider.css';

export default function Slidertest() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slides, setSlides] = useState([
    { url: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Caption Text" },
    { url: "https://images.pexels.com/photos/7120424/pexels-photo-7120424.png?auto=compress&cs=tinysrgb&w=600", text: "Caption Two" },
    { url: "https://media.istockphoto.com/photos/deep-learning-artificial-intelligence-background-picture-id1310293181?b=1&k=20&m=1310293181&s=612x612&w=0&h=d_4RRKTU-n04JK34npxeY-JCrlQkgAB5g8jz42rPNNc=", text: "Caption Three" }
  ]);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="mySlides fade"
          style={{ display: index === slideIndex - 1 ? "block" : "none" }}
        >
          <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
          <img src={slide.url} style={{ width: "100%" }} />
          <div className="text">{slide.text}</div>
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <br />

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex - 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
}
