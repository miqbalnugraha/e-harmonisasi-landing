"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Activity, HeartHandshake, icons } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Loading from "./loading";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  total: number;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "RUU",
    description: "Rancangan Undang-Undang",
    total: 4,
  },
  {
    icon: "LineChart",
    title: "RPERPPU",
    description: "Rancangan Peraturan Pemerintah Pengganti Undang-Undang",
    total: 1,
  },
  {
    icon: "Wallet",
    title: "RPERMEN",
    description: "Rancangan Peraturan Menteri",
    total: 203,
  },
  {
    icon: "Sparkle",
    title: "RPERBAN/LEMBAGA",
    description: "Rancangan Kepala Badan/Lembaga",
    total: 90,
  },
];

export const PartisipasiSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [countPartisipasi, setCountPartisipasi] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        console.log(
          "NEXT_PUBLIC_URL_EHARMON:",
          process.env.NEXT_PUBLIC_URL_EHARMON
        );
        console.log(
          "NEXT_PRIVATE_TOKEN_EHARMON:",
          process.env.NEXT_PRIVATE_TOKEN_EHARMON
        );
        try {
          setIsLoading(true);
          const response = await fetch("/api/partisipasi/count-by-jenis-uu", {
            method: "GET",
          });
          const data = await response.json();
          console.log(data);

          if (response.ok) {
            const res_data = data.data;

            setCountPartisipasi(res_data);
            setIsLoading(false);
          } else {
            setMessage(data.message || "Failed to fetch data");
            // setIsLoading(false);
          }
        } catch (error: any) {
          // setIsLoading(false);
          console.error("Error:", error);
          const msg = error?.response.data.message;
          setMessage(msg);
          if (!msg) {
            const res_data = error?.response.data;
            const responseCode = res_data.split(":");
            setMessage(responseCode[0]);
          }
        }
      };
      fetchData();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return (
    <section id="benefits" className="container py-24 sm:py-32 ">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-red-500 mb-2 tracking-wider">
            <HeartHandshake size={50} />
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partisipasi
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Masyarakat
            </span>
          </h2>
          <p className="text-md  md:text-lg text-muted-foreground mb-8">
            Partisipasi Masyarakat adalah kegiatan yang dilakukan untuk menerima
            masukan, tanggapan, atau pandangan dari masyarakat dalam rangka
            menciptakan peraturan perundang-undangan yang berkualitas.
          </p>
        </div>

        <div className="mx-auto">
          <Marquee
            className="gap-[2rem]"
            fade
            innerClassName="gap-[2rem]"
            pauseOnHover
          >
            {isLoading ? (
              <Loading />
            ) : (
              countPartisipasi.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center w-[300px] h-[200px]"
                >
                  <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number w-full h-full">
                    <CardHeader>
                      <div className="flex justify-between">
                        <Icon
                          name="Sparkle"
                          size={32}
                          color="hsl(var(--primary))"
                          className="mb-6 text-primary"
                        />
                        <span className="text-5xl text-muted-foreground/50 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                          {item.total_komentar}
                        </span>
                      </div>

                      <CardTitle>{item.singkatan}</CardTitle>
                    </CardHeader>

                    <CardContent className="text-muted-foreground">
                      {item.nama_jenis_uu}
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
