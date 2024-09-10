"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: "https://i.pravatar.cc/400",
    location: "Rio de Janeiro, Brasil",
    rating: 5,
    text: "Minha viagem para Bali foi incrível! O site ofereceu ótimas recomendações e o processo de reserva foi super fácil. Mal posso esperar para planejar minha próxima aventura!",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100",
    location: "Nova York, EUA",
    rating: 4,
    text: "Excelente serviço! Encontrei um pacote para Paris que cabia perfeitamente no meu orçamento. A equipe de suporte foi muito prestativa quando precisei fazer alterações na minha reserva.",
  },
  {
    id: 3,
    name: "Akira Tanaka",
    avatar: "https://i.pravatar.cc/300",
    location: "Tóquio, Japão",
    rating: 5,
    text: "Usei o site para planejar uma viagem pela Europa e fiquei impressionado com a variedade de opções e a facilidade de uso. Recomendo a todos os viajantes!",
  },
];

const stats = [
  { label: "Viajantes Satisfeitos", value: "500k+", icon: Users },
  { label: "Destinos", value: "1000+", icon: MapPin },
  { label: "Anos de Experiência", value: "15+", icon: Calendar },
];

export default function TestimonialsAndStats() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="relative overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                  />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentTestimonial].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Números que Falam por Si
            </h3>
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
