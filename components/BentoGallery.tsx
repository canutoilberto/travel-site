import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Paris",
    country: "França",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bali",
    country: "Indonésia",
    image:
      "https://images.unsplash.com/photo-1500213721845-709b85a28da0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tóquio",
    country: "Japão",
    image:
      "https://images.unsplash.com/photo-1717012196028-1c2f16dbaf23?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nova York",
    country: "EUA",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rio de Janeiro",
    country: "Brasil",
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Santorini",
    country: "Grécia",
    image:
      "https://images.unsplash.com/photo-1673590362725-2323fe837d43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image:
      "https://plus.unsplash.com/premium_photo-1694542947671-03a7d921cc85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  : index === 2
                  ? "md:row-span-2"
                  : index === 4
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <CardContent className="p-0 relative group">
                <Image
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  width={800}
                  height={600}
                  layout="responsive"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
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
