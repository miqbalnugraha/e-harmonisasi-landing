"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import {
  Sparkles,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle,
  Rocket,
  Zap,
  Star,
  Award,
  Target,
  Trophy,
  Crown,
  Flame,
  Heart,
  Shield,
} from "lucide-react";
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

const iconPool = [
  Sparkles,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle,
  Rocket,
  Zap,
  Star,
  Award,
  Target,
  Trophy,
  Crown,
  Flame,
  Heart,
  Shield,
];
const colorPalette = [
  "text-blue-600",
  "text-indigo-600",
  "text-yellow-600",
  "text-emerald-600",
  "text-cyan-600",
  "text-rose-600",
  "text-orange-600",
  "text-teal-600",
  "text-gray-600",
  "text-violet-600",
];

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

  const getRandomIcon = (index: number) => iconPool[index % iconPool.length];

  const getRandomColor = (index: number) =>
    colorPalette[index % colorPalette.length];

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [countPartisipasi, setCountPartisipasi] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            "/api/rancangan/count-rancangan-partisipasi",
            {
              method: "GET",
            }
          );
          const data = await response.json();
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
    <section id="benefits" className="container py-24 sm:py-24 ">
      {/* <div className="grid lg:grid-cols-2 place-items-center lg:gap-24"> */}
      {/* <div>
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
        </div> */}

      <div className="text-center justify-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Total Konsultasi Publik
        </h2>
        <h2 className="text-xl md:text-2xl text-center font-bold mb-2">
          Jumlah Rancangan PUU yang sedang dikonsultasikan kepada publik melalui
          e-Harmonisasi
        </h2>
        <h3 className="md:w-3/4 mx-auto text-md text-center text-muted-foreground mb-8">
          e-Harmonisasi membuka ruang bagi masyarakat untuk memberikan masukan
          dan tanggapan terhadap rancangan peraturan yang sedang dikonsultasikan
          agar menghasilkan peraturan yang lebih baik dan transparan.
        </h3>
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
                      {(() => {
                        const RandomIcon = getRandomIcon(index);
                        return (
                          <RandomIcon
                            size={32}
                            className={`mb-6 transition-transform duration-500 group-hover:scale-110 ${getRandomColor(
                              index
                            )}`}
                          />
                        );
                      })()}
                      <span className="text-5xl text-muted-foreground/50 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                        {item.total}
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
      {/* </div> */}
    </section>
  );
};
