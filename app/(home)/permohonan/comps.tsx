"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import {
  Activity,
  HandPlatter,
  HeartHandshake,
  icons,
  Puzzle,
  Scale,
  Workflow,
} from "lucide-react";
import Loading from "./loading";
import { Counter } from "@/components/my/counter";
import { toast } from "sonner";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  total: number;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "FileText",
    title: "Total",
    description: "Rancangan Peraturan Undang-Undang",
    total: 9033,
  },
  {
    icon: "Inbox",
    title: "Permohononan",
    description: "Permohonan Harmonisasi",
    total: 7555,
  },
  {
    icon: "Repeat",
    title: "Diproses",
    description: "Permohonan Harmonisasi diproses",
    total: 7555,
  },
  {
    icon: "CircleCheck",
    title: "Selesai",
    description: "Proses Harmonisasi Selesai",
    total: 203,
  },
];

export const RuuSection = () => {
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
            const res_data = data.data.permohonan;

            setPermohonan(res_data);
            setIsLoading(false);
          } else {
            setMessage(data.message || "Failed to fetch data");
            toast.error(data.error, {
              description: data.message,
            });
            // throw new Error(data.message ?? data.error ?? "Something went wrong");
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
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-sky-600 mb-2 tracking-wider">
            <Workflow size={50} />
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent pr-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Harmonisasi
            </span>
            Rancangan Peraturan Perundang-undangan
          </h2>
          <p className="text-md  md:text-lg text-muted-foreground mb-8 text-justify">
            Melalui e-Harmonisasi, proses harmonisasi Rancangan Peraturan
            Perundang-undangan (RPUU) dilaksanakan secara terpadu dan digital.
            Sistem ini memfasilitasi permohonan, pembahasan, hingga penyelesaian
            hasil harmonisasi, sehingga proses penyusunan peraturan menjadi
            lebih efisien, transparan, dan terkoordinasi.
          </p>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {Object.entries(permohonan).map(([key, item], index) => (
              <Card
                key={index}
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={item.icon as keyof typeof icons}
                      size={32}
                      // color="hsl(var(--primary))"
                      className="mb-6 text-sky-600"
                    />
                    <Counter
                      value={item.jumlah}
                      className="text-5xl text-muted-foreground/50 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                    />
                    {/* <span className="text-5xl text-muted-foreground/50 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      {item.jumlah}
                    </span> */}
                  </div>

                  <CardTitle>{key}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
