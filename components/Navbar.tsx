"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plane, Search, Menu, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="w-full bg-background z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Plane className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-primary-foreground" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-primary dark:text-primary-foreground">
              TravelSite
            </span>
          </Link>

          {/* Navigation Menu - Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                        <a
                          href="/praias"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Praias
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Relaxe em praias paradisíacas ao redor do mundo.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/montanhas"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Montanhas
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore paisagens deslumbrantes e trilhas
                            emocionantes.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/cidades"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Cidades
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Descubra a cultura e a vida noturna de cidades
                            fascinantes.
                          </p>
                        </a>
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

          {/* Search Bar and Theme Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Pesquisar destinos..."
              className="w-64"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              />
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center">
                  <Plane className="h-6 w-6 text-primary dark:text-primary-foreground" />
                  <span className="ml-2 text-lg font-bold text-primary dark:text-primary-foreground">
                    TravelSite
                  </span>
                </Link>
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
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm font-medium">Alternar Tema</span>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    />
                    <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
