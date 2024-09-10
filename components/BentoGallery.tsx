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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Destinos Populares
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <Card
              key={dest.name}
              className={`overflow-hidden ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                  ? "md:row-span-2"
                  : index === 4
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <CardContent className="p-0 relative group">
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                  <p className="text-white flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {dest.country}
                  </p>
                  <Button variant="secondary" className="mt-2">
                    Explorar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
