"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Clock, Plane, DollarSign } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Pacote Romântico em Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "3 noites no coração de Paris com jantar na Torre Eiffel",
    price: 1299,
    discount: 15,
    duration: "4 dias",
    departure: "15/06/2024",
  },
  {
    id: 2,
    title: "Aventura na Costa Rica",
    image:
      "https://images.unsplash.com/photo-1643400812282-4ef456a7b352?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore florestas tropicais e praias paradisíacas",
    price: 1599,
    discount: 10,
    duration: "7 dias",
    departure: "22/07/2024",
  },
  {
    id: 3,
    title: "Cultura e Tradição no Japão",
    image:
      "https://images.unsplash.com/photo-1717012196028-1c2f16dbaf23?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Visite Tóquio, Quioto e Monte Fuji em uma jornada inesquecível",
    price: 2299,
    discount: 5,
    duration: "10 dias",
    departure: "05/09/2024",
  },
  {
    id: 4,
    title: "Safári na Tanzânia",
    image:
      "https://plus.unsplash.com/premium_photo-1661929528595-7010c17acddd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Observe a vida selvagem no Serengeti e Ngorongoro",
    price: 3499,
    discount: 8,
    duration: "8 dias",
    departure: "12/08/2024",
  },
  {
    id: 5,
    title: "Cruzeiro pelas Ilhas Gregas",
    image:
      "https://images.unsplash.com/photo-1692528614253-13d32c247e1d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Navegue por Santorini, Mykonos e outras ilhas deslumbrantes",
    price: 1899,
    discount: 12,
    duration: "6 dias",
    departure: "30/06/2024",
  },
];

export default function SpecialOffers() {
  const carouselRef = useRef(null);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Ofertas Especiais
        </h2>
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {offers.map((offer) => (
              <CarouselItem
                key={offer.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full flex flex-col">
                  <CardContent className="p-0 flex-grow">
                    <div className="relative h-48 md:h-64">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        {offer.discount}% OFF
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {offer.description}
                      </p>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" /> {offer.duration}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />{" "}
                          {offer.departure}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">
                          <DollarSign className="w-5 h-5 inline-block -mt-1" />
                          {offer.price}
                        </span>
                        <span className="text-muted-foreground line-through">
                          <DollarSign className="w-4 h-4 inline-block -mt-1" />
                          {Math.round(offer.price / (1 - offer.discount / 100))}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button className="w-full">
                      <Plane className="w-4 h-4 mr-2" /> Reservar Agora
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
