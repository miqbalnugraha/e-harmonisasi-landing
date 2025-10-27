"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  MessageSquareQuote,
  Clock,
  Sparkles,
  TrendingUp,
  FileText,
  CheckCircle,
  Rocket,
  Zap,
  Award,
  Target,
  Trophy,
  Crown,
  Flame,
  Heart,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Loading from "./loading";
import { Icon } from "@/components/ui/icon";

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

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const RuuDetailSection = () => {
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

  const getIconColor = (index: any) => {
    const colors = [
      "text-blue-500",
      "text-purple-500",
      "text-orange-500",
      "text-green-500",
      "text-indigo-500",
    ];
    return colors[index % colors.length];
  };

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [permohonan, setPermohonan] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch("/api/rancangan/dashboard", {
            method: "GET",
          });
          const data = await response.json();

          if (response.ok) {
            const res_data = data.data.rancanganpusat;

            setPermohonan(res_data);
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
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Harmonisasi Peraturan Perundang-undangan
        </h2>

        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
          Proses Harmonisasi Peraturan Perundang-undangan
        </h2>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto">
          <Marquee
            className="gap-[2rem]"
            fade
            innerClassName="flex gap-[2rem]"
            pauseOnHover
          >
            {isLoading ? (
              <Loading />
            ) : (
              Object.entries(permohonan).map(([key, item], index) => (
                <div
                  key={index}
                  className="p-2 flex-shrink-0 w-[320px] h-[450px]"
                >
                  <Card className="group relative flex flex-col justify-between overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <CardHeader className="space-y-4 pb-4 flex-grow-0">
                      <div className="flex justify-between items-start">
                        {/* Icon with animated background */}
                        <div
                          className={`relative p-3 rounded-2xl bg-gradient-to-br ${getGradient(
                            index
                          )} bg-opacity-10 transition-transform duration-500`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                          {/* <Sparkles
                            className={`h-8 w-8 ${getIconColor(
                              index
                            )} relative z-10`}
                          /> */}
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
                          {/* <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium mt-1">
                            <TrendingUp className="h-4 w-4" />
                            <span>
                              {Math.round((item.selesai / item.total) * 100)}%
                            </span>
                          </div> */}
                        </div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
                        {key.toUpperCase()}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800 flex-grow">
                      {/* Stats with icons */}
                      {[
                        {
                          label: "Permohonan",
                          value: item.permohonan,
                          icon: FileText,
                          color: "text-blue-500",
                        },
                        {
                          label: "Proses",
                          value: item.proses,
                          icon: Clock,
                          color: "text-orange-500",
                        },
                        {
                          label: "Selesai",
                          value: item.selesai,
                          icon: CheckCircle,
                          color: "text-green-500",
                        },
                      ].map(({ label, value, icon: Icon, color }, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className={`h-4 w-4 ${color}`} />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {label}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {value}
                          </span>
                        </div>
                      ))}

                      {/* Progress bar */}
                      <div className="pt-2 mt-auto">
                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
                          <span>Progress</span>
                          <span className="font-semibold">
                            {Math.round((item.selesai / item.total) * 100)}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getGradient(
                              index
                            )} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{
                              width: `${(item.selesai / item.total) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </Marquee>
        </div>
      )}
    </section>
  );
};
