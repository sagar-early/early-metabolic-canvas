
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);

  const images = [
    {
      src: "/lovable-uploads/cdeb1c24-308d-49fb-99e9-2b28960bb2c8.png",
      alt: "What Happens After You Order - Complete process overview"
    },
    {
      src: "/lovable-uploads/8d63363c-e85f-4688-8fe6-85007d2d00d7.png",
      alt: "Your 1-Week Early Diet Plan - Personalized nutrition guidance"
    },
    {
      src: "/lovable-uploads/1fc28f26-5491-42e6-877f-197f57bbc37b.png",
      alt: "Root Cause Diagnosis - Expert medical analysis"
    },
    {
      src: "/lovable-uploads/0526e4a3-3220-407c-a5dd-0571174d6850.png",
      alt: "At-Home Metabolic Test - Convenient lab testing"
    },
    {
      src: "/lovable-uploads/db938ab2-6382-4181-a5f0-96430633a5cf.png",
      alt: "Your Path to Metabolic Clarity - Complete journey overview"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleZoomToggle = () => {
    setShowZoom(!showZoom);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-126 overflow-hidden rounded-2xl shadow-2xl group">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
        />
      

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-3 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-white shadow-lg scale-110' 
                : 'border-gray-300 hover:border-primary opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      {showZoom && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleZoomToggle}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={handleZoomToggle}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
