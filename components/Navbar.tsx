"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Plane, Search, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Plane className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">
              TravelSite
            </span>
          </Link>

          {/* Navigation Menu - Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Plane className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Explorar Todos
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubra novos lugares e aventuras incríveis.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/praias">Praias</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/montanhas">Montanhas</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/cidades">Cidades</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/ofertas" legacyBehavior passHref>
                  <NavigationMenuLink>Ofertas</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sobre" legacyBehavior passHref>
                  <NavigationMenuLink>Sobre</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-4">
            <Input
              type="search"
              placeholder="Pesquisar destinos..."
              className="mr-2"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/destinos" className="text-lg font-medium">
                  Destinos
                </Link>
                <Link href="/ofertas" className="text-lg font-medium">
                  Ofertas
                </Link>
                <Link href="/sobre" className="text-lg font-medium">
                  Sobre
                </Link>
                <div className="pt-4">
                  <Input
                    type="search"
                    placeholder="Pesquisar destinos..."
                    className="mb-2"
                  />
                  <Button type="submit" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Pesquisar
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
