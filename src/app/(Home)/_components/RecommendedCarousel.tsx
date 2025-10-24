'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

 const recommendedProperties = [
    {
      name: "Horizon Heights Apartments",
      tag: "Sea-view homes",
      location: "3649 Foster Hill Drive North, St. Petersburg, FL 33704",
      price: "From 1.4CR",
      tags: ["Luxury Apartments", "For Families", "Selected By Hommea"],
      image: "/images/recommended-carousel-1.jpg"
    },
    {
      name: "SummitScape Township",
      tag: "Golf villas",
      location: "3649 Foster Hill Drive North, St. Petersburg, FL 33704",
      price: "From 1.4CR",
      tags: ["Great Infra", "By Golf Course", "Kid Friendly"],
      image: "/images/recommended-carousel-2.jpg"
    },
    {
      name: "NovaNest Homes",
      tag: "Heritage homes",
      location: "3649 Foster Hill Drive North, St. Petersburg, FL 33704",
      price: "From 1.4CR",
      tags: ["Quite Neighbour", "Kid Friendly", "Education Zone", "River Side"],
      image: "/images/recommended-carousel-3.jpg"
    },
    {
      name: "NovaNest Homes",
      tag: "Heritage homes",
      location: "3649 Foster Hill Drive North, St. Petersburg, FL 33704",
      price: "From 1.4CR",
      tags: ["Quite Neighbour", "Kid Friendly", "Education Zone", "River Side"],
      image: "/images/recommended-carousel-4.jpg"
    }
  ];

type Property = {
  name: string;
  tag: string;
  location: string;
  price: string;
  tags: string[];
  image: string;
};

export default function RecommendedCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const properties: Property[] = recommendedProperties;
  // const dots = Array.from({ length: properties.length }, (_, i) => i);

  useEffect(() => {
    if (!api) return;

    // Get scroll snap points
    const snapList = api.scrollSnapList();
    setScrollSnaps(snapList);
    setCurrentSlide(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[42px] font-bold text-text-primary mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hommea Recommended
            </h2>
            <p className="text-text-primary text-base">
              Perfect for startup founders seeking green luxury living and family-friendly experiences.
            </p>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700 transition">
            View All Projects
          </button>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {properties.map((property, index) => (
                <CarouselItem key={index} className="pl-6 basis-auto">
                  <div className="w-[448px]">
                    <div className="relative h-[400px] border border-neutral-400 rounded overflow-hidden mb-4 group">
                      <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-500">
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {property.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-5 right-5 flex gap-2">
                        <button className="w-[30px] h-[30px] rounded-full border border-white bg-transparent backdrop-blur-sm opacity-40 hover:opacity-100 transition flex items-center justify-center">
                          <ChevronLeft size={16} className="text-white" />
                        </button>
                        <button className="w-[30px] h-[30px] rounded-full border border-white bg-transparent backdrop-blur-sm hover:opacity-100 transition flex items-center justify-center">
                          <ChevronRight size={16} className="text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[20px] font-semibold text-neutral-900">
                          {property.name}
                        </h3>
                        <span className="border border-primary-brown text-primary-brown px-3 py-1 text-xs font-semibold">
                          {property.tag}
                        </span>
                      </div>
                      <p className="text-[12px] text-neutral-500">{property.location}</p>
                      <p className="text-[14px] font-semibold text-neutral-900">{property.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center justify-between gap-6 mt-8">
            <button
              className="w-10 h-10 rounded-full border border-text-primary flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-50"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
            >
              <ChevronLeft size={20} className="text-text-primary" />
            </button>

            <div className="flex gap-6">
              {scrollSnaps.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-neutral-900' : 'bg-gray-300'}`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>

            <button
              className="w-10 h-10 rounded-full border border-text-primary flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-50"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
            >
              <ChevronRight size={20} className="text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}