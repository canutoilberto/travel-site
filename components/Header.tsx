"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SlideContent = {
  type: "image" | "video";
  src: string;
  alt?: string;
  cta: string;
  description: string;
};

const slides: SlideContent[] = [
  {
    type: "video",
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Praia paradisíaca",
    cta: "Descubra praias incríveis",
    description: "Relaxe em areias douradas e águas cristalinas",
  },
  {
    type: "video",
    src: "https://example.com/video-placeholder.mp4",
    cta: "Explore cidades vibrantes",
    description:
      "Mergulhe na cultura e história de destinos urbanos fascinantes",
  },
  {
    type: "video",
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Montanhas majestosas",
    cta: "Aventure-se nas alturas",
    description:
      "Desafie-se com trilhas emocionantes e vistas de tirar o fôlego",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-[600px] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={slide.alt || ""}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                  {slide.cta}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                  {slide.description}
                </p>
                <Button size="lg" className="text-lg">
                  Saiba Mais
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </header>
  );
}
