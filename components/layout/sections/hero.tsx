"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
        <div className="text-center space-y-8">
          {/* <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge> */}

          <div className="max-w-screen-sm mx-auto text-center text-3xl lg:text-6xl font-bold">
            <h1>
              Satu Portal, Satu Proses,
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Harmonisasi <br />
              </span>
              Lebih Mudah
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-sm  md:text-lg text-muted-foreground">
            {`Dengan e-Harmonisasi, masyarakat dan instansi dapat berpartisipasi aktif dalam mewujudkan regulasi yang berkualitas, transparan, dan responsif.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="https://e-harmonisasi.peraturan.go.id" target="_blank">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Login Sekarang
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1000}
            // className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 block"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
