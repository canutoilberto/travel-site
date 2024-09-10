import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm">
              TravelSite é sua parceira para descobrir o mundo. Oferecemos as
              melhores experiências de viagem com pacotes personalizados e
              suporte excepcional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinos">Destinos</Link>
              </li>
              <li>
                <Link href="/ofertas">Ofertas Especiais</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
              <li>
                <Link href="/blog">Blog de Viagens</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +55 (11) 1234-5678
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contato@travelsite.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Receba Nossas Ofertas
            </h3>
            <p className="text-sm mb-4">
              Inscreva-se para receber as melhores ofertas de viagens.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-primary-foreground text-primary"
              />
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 TravelSite. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
