"use client";
import { ChevronsDown, Github, Menu, LogIn } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { routeList, rancanganList } from "@/types/menu-list";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
        <Image
          width={40}
          height={40}
          className="ml-2 mr-4"
          src={"/logo-e-harmonisasi.png"}
          alt="dashboard"
        />
        e-Harmonisasi
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-8 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                    <Image
                      width={30}
                      height={30}
                      className="ml-2 mr-4"
                      src={"/logo-e-harmonisasi.png"}
                      alt="dashboard"
                    />
                    e-Harmonisasi
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-0">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                {/* Submenu Rancangan */}
                {/* <Accordion type="single" collapsible className="w-full mt-2">
                  <AccordionItem value="rancangan">
                    <AccordionTrigger className="text-base font-medium">
                      Rancangan
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1">
                      {rancanganList.map(({ title, href }) => (
                        <Button
                          key={title}
                          onClick={() => setIsOpen(false)}
                          asChild
                          variant="ghost"
                          className="justify-start text-base"
                        >
                          <Link href={href}>{title}</Link>
                        </Button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              {/* <ToggleTheme /> */}
              <Button
                asChild
                size="sm"
                variant="ghost"
                aria-label="Login e-Harmonisasi"
              >
                <Link
                  aria-label="Login e-Harmonisasi"
                  href={process.env.NEXT_PUBLIC_URL_EHARMON || "#"}
                  target="_blank"
                  className="group flex items-center"
                >
                  Login
                  <LogIn className="size-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink
                key={href}
                asChild
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Link href={href} className="">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Rancangan
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <ul className="col-span-2 grid grid-cols-2 gap-3">
                  {rancanganList.map(({ title, description, href }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted cursor-pointer"
                    >
                      <Link href={href}>
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button
          asChild
          size="sm"
          variant="ghost"
          aria-label="Login e-Harmonisasi"
        >
          <Link
            aria-label="Login e-Harmonisasi"
            href={process.env.NEXT_PUBLIC_URL_EHARMON || "#"}
            target="_blank"
            className="group flex items-center"
          >
            Login
            <LogIn className="size-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};
