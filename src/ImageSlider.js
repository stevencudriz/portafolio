import React, { useState } from 'react';
import { SliderData } from './SliderData';
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <button className='left-arrow' onClick={prevSlide}></button>
      <button className='right-arrow' onClick={nextSlide}></button>
      {SliderData.map((slide, index) => {
        return (
          <div
           
            key={index}
          >
            {index === current && (
              <img src={slide.image}  alt="" className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
