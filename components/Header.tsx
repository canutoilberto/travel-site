"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SlideContent = {
  src: string;
  alt?: string;
  cta: string;
  description: string;
};

const slides: SlideContent[] = [
  {
    src: "https://videos.pexels.com/video-files/2099568/2099568-hd_1920_1080_30fps.mp4",
    alt: "Praia paradisíaca",
    cta: "Descubra praias incríveis",
    description: "Relaxe em areias douradas e águas cristalinas",
  },
  {
    src: "https://videos.pexels.com/video-files/3015511/3015511-hd_1920_1080_24fps.mp4",
    alt: "Caminhos de cultura",
    cta: "Explore cidades vibrantes",
    description:
      "Mergulhe na cultura e história de destinos urbanos fascinantes",
  },
  {
    src: "https://videos.pexels.com/video-files/2547258/2547258-uhd_2560_1440_30fps.mp4",
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
    <header className="relative h-[200px] md:h-[670px] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
                  {slide.cta}
                </h1>
                <p className="text-sm sm:text-xl md:text-2xl mb-4 sm:mb-8 max-w-lg md:max-w-2xl">
                  {slide.description}
                </p>
                <Button size="lg" className="text-sm sm:text-lg">
                  Saiba Mais
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </header>
  );
}
