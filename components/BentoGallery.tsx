import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Paris",
    country: "França",
    image:
      "https://images.pexels.com/photos/2344/cars-france-landmark-lights.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bali",
    country: "Indonésia",
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Tóquio",
    country: "Japão",
    image:
      "https://images.pexels.com/photos/950834/pexels-photo-950834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Nova York",
    country: "EUA",
    image:
      "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Rio de Janeiro",
    country: "Brasil",
    image:
      "https://images.pexels.com/photos/161212/rio-de-janeiro-olympics-2016-niteroi-brazil-161212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Santorini",
    country: "Grécia",
    image:
      "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image:
      "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function BentoGallery() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Destinos Populares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, index) => (
            <Card
              key={dest.name}
              className={`overflow-hidden ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : index === 2
                  ? "lg:row-span-2"
                  : index === 4
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <CardContent className="p-0 relative group">
                <div className="aspect-[4/3] sm:aspect-square w-full h-full relative">
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {dest.name}
                    </h3>
                    <p className="text-white flex items-center text-sm sm:text-base">
                      <MapPin className="w-4 h-4 mr-1" />
                      {dest.country}
                    </p>
                    <Button
                      variant="secondary"
                      className="mt-2 text-sm sm:text-base"
                    >
                      Explorar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
