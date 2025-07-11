
import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop",
      alt: "Medical summary and health analysis"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
      alt: "Blood test and lab work"
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=500&fit=crop",
      alt: "Doctor consultation"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      alt: "Nutritionist guidance"
    },
    {
      src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=500&fit=crop",
      alt: "Next steps planning"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
