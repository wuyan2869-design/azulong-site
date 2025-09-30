'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

interface CompactImageSliderProps {
  images: string[];
  width?: number;
  height?: number;
  autoPlay?: boolean;
  interval?: number;
}

export function CompactImageSlider({
  images,
  width = 310,
  height = 235,
  autoPlay = true,
  interval = 3000
}: CompactImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (images.length === 0) {
    return (
      <div
        className="bg-gray-300 rounded-lg flex items-center justify-center"
        style={{ width, height }}
      >
        <span className="text-gray-600">暂无图片</span>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md bg-gray-100"
      style={{ width, height }}
    >
      <Image
        src={images[currentIndex]}
        alt={`美景图片 ${currentIndex + 1}`}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={true}
        unoptimized={true}
      />

      {/* 图片指示器 */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ImageSlider({
  images,
  autoPlay = true,
  interval = 4000
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length]);

  // Auto-play effect with pause support
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Display */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Current Image */}
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain transition-all duration-500"
          priority={currentIndex === 0}
        />

        {/* Preload next image */}
        {images[currentIndex + 1] && (
          <Image
            src={images[currentIndex + 1].src}
            alt={images[currentIndex + 1].alt}
            fill
            className="object-contain opacity-0 pointer-events-none"
            priority={false}
          />
        )}

        {/* Preload first image when on last slide */}
        {currentIndex === images.length - 1 && images[0] && (
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-contain opacity-0 pointer-events-none"
            priority={false}
          />
        )}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Image Info */}
      <div className="p-6 text-center">
        {images[currentIndex].title && (
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            {images[currentIndex].title}
          </h3>
        )}
        {images[currentIndex].description && (
          <p className="text-neutral-600 leading-relaxed">
            {images[currentIndex].description}
          </p>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 pb-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}