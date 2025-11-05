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
import { Star, MessageSquareQuote, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Loading from "./loading";
import { toast } from "sonner";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const DaftarMasukan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [partisipasi, setPartisipasi] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch("/api/partisipasi/view-last", {
            method: "GET",
          });
          const data = await response.json();

          if (response.ok) {
            const res_data = data.data;

            setPartisipasi(res_data);
            setIsLoading(false);
          } else {
            setMessage(data.message || "Failed to fetch data");
            toast.error(data.error, {
              description: data.message,
            });
            // throw new Error(
            //   data.message ?? data.error ?? "Something went wrong"
            // );
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
    <section id="testimonials" className="container py-24 sm:py-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Konsultasi Publik
        </h2>

        <h2 className="text-xl md:text-2xl text-center font-bold mb-4">
          Daftar Konsultasi Publik Rancangan Peraturan Perundang-undangan
          Terbaru
        </h2>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {partisipasi.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group bg-gradient-to-br from-background to-muted/20 dark:from-card dark:to-muted/10 h-full flex flex-col border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                  <CardContent className="pt-5 pb-4 flex-grow space-y-3">
                    {/* Badge */}
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5 font-medium"
                    >
                      {item.jenis_rancangan}
                    </Badge>

                    {/* Title */}
                    <CardTitle className="text-base font-bold leading-tight line-clamp-3 group-hover:text-primary transition-colors min-h-[3.6rem]">
                      {item.nama_rancangan}
                    </CardTitle>

                    {/* Quote section */}
                    <div className="relative pl-3 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <MessageSquareQuote
                        className="absolute -left-[9px] -top-0.5 text-primary bg-background dark:bg-card"
                        size={16}
                      />
                      <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-2">
                        {`"${item.catatan}"`}
                      </p>
                    </div>
                  </CardContent>

                  {/* Footer */}
                  <CardHeader className="pt-3 pb-4 mt-auto border-t border-border/50">
                    <div className="flex items-center gap-2.5">
                      <Avatar className="h-9 w-9 ring-2 ring-primary/10">
                        <AvatarImage src="/avatars.png" alt={item.nama} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                          {item.nama
                            .split(" ")
                            .map((n: any) => n[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm font-semibold truncate">
                          {item.nama}
                        </CardTitle>
                        <CardDescription className="text-[11px] truncate">
                          {item.instansi}
                        </CardDescription>
                      </div>

                      {/* <div className="flex items-center gap-1 text-[10px] text-muted-foreground shrink-0">
                      <Clock size={11} />
                      <span className="whitespace-nowrap">{item.date}</span>
                    </div> */}
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
};
