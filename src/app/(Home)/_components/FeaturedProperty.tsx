"use client"

import Image from 'next/image';
import { Menu, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const featuredProperty = [
  {
    title: 'An eco-villa community with a glass-and-steel design, sustainable timber, and solar energy.',
    description: 'Perfect for startup founders seeking green luxury living and family-friendly experiences.',
    image: '/images/featured-property-1.png',
    tags: ['Bio-Climatic Cooling', 'Elite Schools', 'Golf Courses', 'Innovative play zones'],
  },
  {
    title: 'Houses ultra-luxe villas set amid landscaped gardens with outdoor learning pods and wellness lounges.',
    description: 'Perfect for startup founders seeking green luxury living and family-friendly experiences.',
    image: '/images/featured-property-2.png',
    tags: ['Bio-Climatic Cooling', 'Elite Schools', 'Golf Courses', 'Innovative play zones'],
  },
  {
    title: 'Reimagines luxury in Mumbai with stunning glass penthouses and private terraces overlooking the Arabian Sea.',
    description: 'Perfect for startup founders seeking green luxury living and family-friendly experiences.',
    image: '/images/featured-property-3.png',
    tags: ['Bio-Climatic Cooling', 'Elite Schools', 'Golf Courses', 'Innovative play zones'],
  },
  {
    title: 'Combine Indo-Portuguese design with luxury touches—imagine high ceilings, arched windows, infinity pools, and mosaic courtyards.',
    description: 'Perfect for startup founders seeking green luxury living and family-friendly experiences.',
    image: '/images/featured-property-4.png',
    tags: ['Bio-Climatic Cooling', 'Elite Schools', 'Golf Courses', 'Innovative play zones'],
  },
]

interface HeroProps {
  onMenuToggle?: () => void;
}
export default function FeaturedProperty({ onMenuToggle }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperty.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProperty.length) % featuredProperty.length);
  };

  const currentProperty = featuredProperty[currentIndex];

  return (
    <section className="bg-[#F9F9F9] min-h-screen">
      <div className="max-w-7xl mx-auto h-screen flex flex-col md:flex-row relative">
        {/* Left side - Full height image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden group">
          <div
            key={currentIndex}
            className="relative w-full h-full animate-[slideUp_0.6s_ease-out]"
          >
            <Image
              src={currentProperty.image}
              alt={currentProperty.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Right Arrow Button on hover */}
          <button
            onClick={nextProperty}
            className="absolute right-8 bottom-20 -translate-y-1/2 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-gray-400 shadow-lg"
          >
            {/* <ChevronRight size={24} className="text-text-primary" /> */}
            <ArrowRight size={48} className="text-white" />
          </button>
        </div>

        {/* Vertical navigation in the middle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div className="flex flex-col gap-4 items-center w-24">
            {featuredProperty.map((property, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  index === currentIndex
                    ? 'ring-4 ring-text-primary p-1 scale-x-120'
                    : 'ring-2 ring-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Title, Menu, Property details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12">
          {/* Top: Title and Menu */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-text-primary">HOMMEA</h3>
            <button className="p-2" onClick={onMenuToggle}>
              <Menu size={30} className="text-text-primary" />
            </button>
          </div>

          {/* Middle: Property details with animation */}
          <div className="flex-1 flex flex-col justify-center overflow-hidden">
            <div
              key={currentIndex}
              className="space-y-6 animate-[slideUp_0.6s_ease-out]"
            >
              <h2 className="text-[36px] leading-[42px] font-bold text-text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
                {currentProperty.title}
              </h2>
              <p className="text-text-primary text-base">
                {currentProperty.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {currentProperty.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2.5 border border-text-primary/20 rounded text-sm font-medium text-text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Horizontal navigation for mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-8 items-center">
            {featuredProperty.map((property, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-12 h-16 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  index === currentIndex
                    ? 'ring-4 ring-text-primary p-1 scale-x-150'
                    : 'ring-2 ring-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}