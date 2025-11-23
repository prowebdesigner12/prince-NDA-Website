
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://princendaacademy.com/images/banner/NDA-1.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://princendaacademy.com/images/banner/1.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://princendaacademy.com/images/banner/3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://princendaacademy.com/images/banner/1.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[calc(100vh-88px)] overflow-hidden bg-slate-900">
      {slides.map((src, index) => (
        <img 
          key={src}
          src={src} 
          alt={`NDA Cadets Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
