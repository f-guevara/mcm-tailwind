import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext
import '../styles/carousel.css';

const Carousel = () => {
  const { language } = useContext(LanguageContext); // Get language from context
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/implants-2.png',
      label: {
        en: 'Our Products',
        de: 'Unsere Produkte',
      },
      buttonText: {
        en: 'View Products',
        de: 'Produkte anzeigen',
      },
      linkTo: '/products',
    },
    {
      image: '/history-2.png',
      label: {
        en: 'About Us',
        de: 'Über uns',
      },
      buttonText: {
        en: 'Learn More',
        de: 'Mehr erfahren',
      },
      linkTo: '/about',
    },
    {
      image: '/premises.png',
      label: {
        en: 'Contact Us',
        de: 'Kontaktieren Sie uns',
      },
      buttonText: {
        en: 'Get in Touch',
        de: 'Kontakt aufnehmen',
      },
      linkTo: '/team',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-content">
            <h2>{slide.label[language]}</h2> {/* Display label in the current language */}
            <Link to={slide.linkTo} className="carousel-button">
              {slide.buttonText[language]} {/* Display button text in the current language */}
            </Link>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
