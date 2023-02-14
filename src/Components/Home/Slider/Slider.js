import React, { useState } from 'react';
import './slider.css';

export default function Slidertest() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slides, setSlides] = useState([
    { url: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Caption Text" },
    { url: "https://images.pexels.com/photos/7120424/pexels-photo-7120424.png?auto=compress&cs=tinysrgb&w=600", text: "Caption Two" }
  ]);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }
  
  return (
    <>
    <div className="slideshow-container ">
      {/* slider immage */}
    <div className=''>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="mySlides fade"
          style={{ display: index === slideIndex - 1 ? "block" : "none" }}
        >
          <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
          <img src={slide.url} style={{ width: "100%" }} className = 'h-[40vh]' />
          <div className="text">{slide.text}</div>
        </div>
      ))}

      {/* slider arrow */}
      <div className=''>
          <div className="prev text-black bg-white" onClick={() => plusSlides(-1)} >
        ❮
          </div>
          <div className="next text-black bg-white " onClick={() => plusSlides(1)}>
         ❯ 
          </div>
      </div>
    </div>

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
    </>
  );
}
