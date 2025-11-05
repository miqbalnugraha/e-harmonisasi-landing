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
import { toast } from "sonner";

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
  const getGradient = (index: any) => {
    const gradients = [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500",
      "from-orange-500 to-red-500",
      "from-green-500 to-emerald-500",
      "from-indigo-500 to-purple-500",
    ];
    return gradients[index % gradients.length];
  };

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
            toast.error(data.error, {
              description: data.message,
            });
            // throw new Error(
            //   data.message ?? data.error ?? "Something went wrong"
            // );
            // setIsLoading(false);
          }
        } catch (error: any) {
          // setIsLoading(false);
          toast.error("Error!", {
            description: error.error,
          });
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
          className="gap-[2rem] pb-4"
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
                className="p-2 flex-shrink-0 w-[320px] h-[250px]"
              >
                <Card className="group relative flex flex-col justify-between overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <CardHeader className="space-y-4 flex-grow-0">
                    <div className="flex justify-between items-start">
                      {/* Icon with animated background */}
                      <div
                        className={`relative p-3 rounded-2xl bg-gradient-to-br ${getGradient(
                          index
                        )} bg-opacity-10 transition-transform duration-500`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

                        {(() => {
                          const RandomIcon = getRandomIcon(index);
                          return (
                            <RandomIcon
                              size={32}
                              className={`transition-transform duration-500 group-hover:scale-110 text-secondary`}
                            />
                          );
                        })()}
                      </div>

                      {/* Large number with gradient */}
                      <div className="text-right">
                        <div
                          className={`text-6xl font-black bg-gradient-to-br ${getGradient(
                            index
                          )} bg-clip-text text-transparent transition-transform duration-500 origin-right`}
                        >
                          {item.total}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.singkatan}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3 flex-grow">
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
